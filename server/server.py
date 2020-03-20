import random
from flask import Flask, render_template
from pymongo import MongoClient
from marshmallow import Schema, fields

app = Flask(__name__, static_folder='/home/sanaa/PycharmProjects/test-react-flask/static/dist',
            template_folder='/home/sanaa/PycharmProjects/test-react-flask/static')


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/hello')  # take note of this decorator syntax, it's a common pattern
def hello():
    # It is good practice to only call a function in your route end-point,
    # rather than have actual implementation code here.
    # This allows for easier unit and integration testing of your functions.
    return get_hello()


def get_hello():
    class MovieSchema(Schema):
        author = fields.Str()
        text = fields.Str()

    client = MongoClient('localhost', 27017)
    db = client.moviesdb
    collection = db.populaires
    movie = MovieSchema(author="Monty", text="monty@python.org")

    posts = collection
    post = posts.insert_one(movie)

    print(collection.find_one({"author": "Monty"}))
    col = collection.find_one({"author": "Monty"})
    name = col['author']
    print(name)
    return (name)


if __name__ == '__main__':
    app.run(debug=True)
