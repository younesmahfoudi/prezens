from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

#SQLALCHEMY_DATABASE_URL = "mysql+pymysql://root:root1234@localhost:6033/prezens_db"
SQLALCHEMY_DATABASE_URL = "mysql+pymysql://root:root1234@db/prezens_db"
# SQLALCHEMY_DATABASE_URL = "mysql://test:test@localhost:6033/prezens_db"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()