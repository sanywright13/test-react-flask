from marshmallow import Schema, fields




class MovieShema(Schema):
    id = fields.Int(required=True)
    video = fields.Boolean()
    vote_count = fields.Int()
    vote_average = fields.Int()
    title = fields.Str()
    release_date = fields.Date()
    original_language = fields.Str()
    original_title = fields.Str()
    #array
    genre_ids = fields.List(fields.Int)
    backdrop_path = fields.Str()
    adult = fields.Boolean()
    overview = fields.Str()
    poster_path = fields.Str()
    popularity = fields.Int()
    media_type = fields.Str()
