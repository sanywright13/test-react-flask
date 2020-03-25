from pymongo import MongoClient
from mongo import MongodbMovie, ClassmoviesApi
from shema import MovieShema
from flask import Flask, jsonify, g, request, render_template
from flask_cors import CORS
from datetime import date
from datetime import datetime

app = Flask(__name__, static_folder='/home/sanaa/PycharmProjects/test-react-flask/static/dist',
            template_folder='/home/sanaa/PycharmProjects/test-react-flask/static')
CORS(app)
# database call

mongo = MongoClient('localhost', 27017)

db = mongo['dbmovies']
mongo = MongodbMovie()
shemaMovie = MovieShema()


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/addMovie', methods=["POST"])
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
def get_all_movies():
    # get the list of the movies added in the data base

    data = [shemaMovie.dump(movie) for movie in mongo.all_movies()]
    return jsonify(data)


if __name__ == '__main__':
    app.run(debug=True)
