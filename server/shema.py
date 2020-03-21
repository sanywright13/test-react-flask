from marshmallow import Schema, fields


class MovieShema(Schema):
    date = fields.Str()
    id_movie = fields.Int(required=True)
    movie_name = fields.Str()
    rate = fields.Str()
    resume = fields.Str()
