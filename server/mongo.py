import os
from pymongo import MongoClient
from mongoengine import *
from datetime import datetime

connect('dbmovies')


class ClassmoviesApi(Document):
    meta = {'collection': 'moviesApifave'}
    id = IntField()
    video = BooleanField()
    vote_count = IntField()
    vote_average = IntField()
    title = StringField()
    original_language = StringField()
    original_title = StringField()
    # array
    genre_ids = ListField(IntField())
    backdrop_path = StringField()
    adult = BooleanField()
    overview = StringField()
    poster_path = StringField()
    popularity = IntField()
    media_type = StringField()


COLLECTION_NAME = "movies_trend"


class MongodbMovie(object):
    def __init__(self):
        # connect to db
        self.mongo = MongoClient('localhost', 27017)
        self.db = self.mongo['dbmovies']

    def addmovie(self, dictu):
        return self.db.moviesApifave.insert_one(dictu)

    def all_movies(self):
        self.collection = ClassmoviesApi._get_collection()
        return self.collection.find()

    def deleteMovie(self, movie):
        self.db.moviesApifave.delete_many({'title': movie['title']})
        return ''
