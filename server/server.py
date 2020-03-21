
from pymongo import MongoClient
from mongo import MongodbMovie
from shema import MovieShema
from flask import Flask, json, g, request,render_template
from flask_cors import CORS

app = Flask(__name__, static_folder='/home/sanaa/PycharmProjects/test-react-flask/static/dist',
            template_folder='/home/sanaa/PycharmProjects/test-react-flask/static')
CORS(app)
# database call

mongo = MongoClient('localhost', 27017)

db = mongo['dbmovies']


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/addMovie', methods=["POST"])
def addMovie():
    mongo = MongodbMovie()
    # i want this record to be an object
    # i want to get the movie object from react and insert it here
    # serialize the api object so we can add it to a data base
    json_data = request.get_json()
    print(json_data)

    # record = {'id': '125', 'date': '2020', 'name': 'game of thrones', 'rate': '5.7', 'resume': 'ggg'}
    # mongo.addmovie(record)

    # we want to return thr data base object
    return {'result': 'done'}


if __name__ == '__main__':
    app.run(debug=True)
