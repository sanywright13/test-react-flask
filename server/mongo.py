import os
from pymongo import MongoClient

COLLECTION_NAME = "movies_trend"


class MongodbMovie(object):
    def __init__(self):
        # connect to db
        self.mongo = MongoClient('localhost', 27017)
        self.db = self.mongo['dbmovies']

    def addmovie(self, dictu):
        return self.db.movies_trend.insert_one(dictu)
