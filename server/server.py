import random
from flask import Flask, render_template
from pymongo import MongoClient
from marshmallow import Schema, fields

app = Flask(__name__, static_folder='/home/sanaa/PycharmProjects/test-react-flask/static/dist',
            template_folder='/home/sanaa/PycharmProjects/test-react-flask/static')


@app.route('/')
def index():
    return render_template('index.html')




if __name__ == '__main__':
    app.run(debug=True)
