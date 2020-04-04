import datetime

import uuid
from marshmallow import Schema, fields, post_load
from bson import ObjectId
from marshmallow import Schema, fields

Schema.TYPE_MAPPING[ObjectId] = fields.String


class Movie:
    def __init__(self, id, video, vote_count, vote_average, title, original_language,
                 original_title, genre_ids, backdrop_path, adult, overview, poster_path, popularity, media_type):
        self.id = id
        self.video = video
        self.vote_count = vote_count
        self.vote_average = vote_average
        self.title = title

        self.original_language = original_language
        self.original_title = original_title
        # array
        self.genre_ids = genre_ids
        self.backdrop_path = backdrop_path
        self.adult = adult
        self.overview = overview
        self.poster_path = poster_path
        self.popularity = popularity
        self.media_type = media_type

        def __repr__(self):
            return "<Movie(overview={self.overview!r})>".format(self=self)


class MovieShema(Schema):
    id = fields.Int(required=True)
    video = fields.Boolean()
    vote_count = fields.Int()
    vote_average = fields.Int()
    title = fields.Str()
    release_date = fields.Date()
    original_language = fields.Str()
    original_title = fields.Str()
    # array
    genre_ids = fields.List(fields.Int)
    backdrop_path = fields.Str()
    adult = fields.Boolean()
    overview = fields.Str()
    poster_path = fields.Str()
    popularity = fields.Int()
    media_type = fields.Str()

    @post_load
    def make_movie(self, data, **kwargs):
        return Movie(**data)


class User:

    def __init__(self, first_name, last_name, email, password, _id=None):
        self._id=_id or uuid.uuid4().hex
        self.first_name =first_name
        self.last_name = last_name
        self.email = email
        self.password = password


class UserShema(Schema):

    _id=fields.String()
    first_name = fields.Str()
    last_name = fields.Str()
    email = fields.Email()
    password = fields.Str()

    @post_load
    def make_user(self, data, **kwargs):
        return User(**data)
