import os
import uuid

from bson import ObjectId
from pymongo import MongoClient
from mongoengine import *
from flask_login import UserMixin
from datetime import datetime
from werkzeug.security import generate_password_hash, check_password_hash
from werkzeug.security import generate_password_hash, check_password_hash

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


class UserModel(Document):
    meta = {'collection': 'User'}
    _id = IntField()
    nom = StringField()
    prenom = StringField()
    email = StringField()
    password = StringField()


class UserMongo(object):
    def __init__(self):
        # connect to db
        self.mongo = MongoClient('localhost', 27017)
        self.db = self.mongo['dbmovies']

    def AddUser(self, user):
        self.user_added = UserModel._get_collection()
        return self.user_added.insert_one(user)

    def getUser(self, email):
        self.user_added = UserModel._get_collection()

        return self.user_added.find_one({"email": email})

    def getUserById(self, id):
        return self.db.User.find_one({"_id": ObjectId(id)})


class User(UserMixin):

    def __init__(self, first_name, last_name, email, password, _id=None):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.password = password
        self._id = _id

    def is_authenticated(self):
        return True

    def is_active(self):
        return True

    def is_anonymous(self):
        return False

    def get_id(self):
        return self._id

    @classmethod
    def getUserId(self, _id):
        mongo_user = UserMongo()
        user_2 = mongo_user.getUserById(_id)

        return user_2
