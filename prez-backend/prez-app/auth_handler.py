import time
from typing import Dict

import jwt
from decouple import config
from pydantic import BaseModel

JWT_SECRET = config("secret")
JWT_ALGORITHM = config("algorithm")

class Token(BaseModel):
    access_token: str

    class Config:
        orm_mode = True

class TokenData(BaseModel):
    user_uid: str | None = None
    expires: str | None = None
    role: str | None = None

    class Config:
        orm_mode = True

def token_response(token: str) -> Token:
    return Token(access_token=token)

def signJWT(user_uid: str, role: str) -> Token:
    payload = TokenData(
            user_uid=user_uid,
            expires=time.time() + 60000,
            role=role
        )
    token = jwt.encode(dict(payload), JWT_SECRET, algorithm=JWT_ALGORITHM)

    return token_response(token)

def decodeJWT(token: str) -> dict:
    try:
        decoded_token = jwt.decode(token, JWT_SECRET, algorithms=[JWT_ALGORITHM])
        return decoded_token if decoded_token["user_uid"] else None
    except:
        return {}
