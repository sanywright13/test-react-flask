import sys

import bson
from pymongo import MongoClient
from mongo import MongodbMovie, ClassmoviesApi, UserModel, UserMongo, User
from shema import MovieShema, UserShema
from flask import Flask, jsonify, g, request, render_template, flash
from flask_cors import CORS
from flask_login import LoginManager, login_user, logout_user, login_required
from werkzeug.security import generate_password_hash, check_password_hash
from flask_bcrypt import Bcrypt
import json
from bson.objectid import ObjectId
from bson import json_util  # somewhere

app = Flask(__name__, static_folder='/home/sanaa/PycharmProjects/test-react-flask/static/dist',
            template_folder='/home/sanaa/PycharmProjects/test-react-flask/static')
app.config['SECRET_KEY'] = '9OLWxND4o83j4K4iuopO'
app.config['TESTING'] = False
login_manager = LoginManager()
login_manager.init_app(app)
bcrypt = Bcrypt(app)
# database call
CORS(app)
mongo = MongoClient('localhost', 27017)

db = mongo['dbmovies']
mongo = MongodbMovie()
mongo_user = UserMongo()
shemaMovie = MovieShema()
shemaUser = UserShema()


class JSONEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, ObjectId):
            return str(o)
        return json.JSONEncoder.default(self, o)


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    return render_template('index.html')


@app.route('/addMovie', methods=["POST"])
@login_required
def addMovie():
    # i want this record to be an object
    # i want to get the movie object from react and insert it here
    # serialize the api object so we can add it to a data base

    jsondata = request.get_json()

    # validate data from the api
    movie_objet = shemaMovie.dump(jsondata['item'])
    mongo.addmovie(movie_objet)
    # convert to an object movie
    # movie_objet = shemaMovie.load(jsondata['item'])
    # print(movie_objet.title)
    ## convert to a string json
    # json_result = shemaMovie.dumps(movie_objet)
    # print(json_result)
    # we want to return thr data base object
    return 'hi'


@app.route('/getmovies', methods=["GET"])
@login_required
def get_all_movies():
    # get the list of the movies added in the data base

    data = [shemaMovie.dump(movie) for movie in mongo.all_movies()]
    print(data)
    return jsonify(data)


@app.route('/remove', methods=['DELETE'])
@login_required
def remove_movie():
    # remove a movie by movie name and api id
    json_data = request.get_json()
    print(json_data['source'])
    movie = json_data['source']
    print(movie)
    mongo.deleteMovie(movie)

    return ''


@app.route('/users/register', methods=["POST"])
def register():
    data_json = request.get_json()
    user = shemaUser.dump(data_json)

    nom = user['first_name']
    prenom = user['last_name']
    email = user['email']

    password = user['password']

    user_exist = mongo_user.getUser(email)
    if user_exist:
        print('Email address already exists')
        return jsonify({"result": "Invalid username and password"})
    else:

        new_user = mongo_user.AddUser(
            {'email': email, 'first_name': nom, 'password': generate_password_hash(password, method='sha256'),
             'last_name': prenom})
        user_exist_up = mongo_user.getUser(email)

        print(user_exist_up['first_name'])
        json_user = shemaUser.dump(user_exist_up)

    return jsonify(json_user)


@app.route('/users/signin', methods=["POST"])
def Signin():
    data_json = request.get_json()
    user = shemaUser.dump(data_json)

    email = user['email']
    password = user['password']
    user_2 = mongo_user.getUser(email)

    if not user_2 or not check_password_hash(user_2['password'], password):
        return jsonify({"result": "user not found"})
    else:
        user = shemaUser.dump(user_2)
        Loguser = User(user["first_name"], user["last_name"], user["email"], user["password"], user["_id"])

        login_user(Loguser)

        return jsonify({'email': user_2['email']})


@login_manager.user_loader
def load_user(user_id):
    # since the user_id is just the primary key of our user table, use it in the query for the user

    user = User.getUserId(user_id)
    if user is not None:
        return User(user["first_name"], user["last_name"], user["email"], user["password"], user["_id"])
    else:
        return None


@app.route('/logout')
@login_required
def logout():
    logout_user()


if __name__ == '__main__':
    app.run(debug=True)
