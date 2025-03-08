import jwt
import datetime
from flask import current_app

def generate_token(user_id):
    return jwt.encode(
        {'user_id': user_id, 'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=1)},
        current_app.config['SECRET_KEY'],
        algorithm='HS256'
    )
