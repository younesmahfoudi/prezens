from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DateTime
from sqlalchemy.orm import relationship

from .database import Base

class Admin(Base):
    __tablename__ = "ADMIN"

    uid = Column(Integer, primary_key=True, index=True)
    email = Column(String(255), unique=True, index=True)
    hashed_password = Column(String(255))
    first_name = Column(String(255))
    last_name = Column(String(255))

class Professor(Base):
    __tablename__ = "PROFESSOR"

    uid = Column(Integer, primary_key=True, index=True)
    email = Column(String(255), unique=True, index=True)
    hashed_password = Column(String(255))
    first_name = Column(String(255))
    last_name = Column(String(255))

    lessons = relationship("Lesson", back_populates="professor")

class Classroom(Base):
    __tablename__ = "CLASSROOM"

    uid = Column(Integer, primary_key=True, index=True)
    promotion = Column(String(255), index=True)
    description = Column(String(255), index=True)

    students = relationship("Student", back_populates="classroom")
    lessons = relationship("Lesson", back_populates="classroom")

class Student(Base):
    __tablename__ = "STUDENT"

    uid = Column(Integer, primary_key=True, index=True)
    student_id = Column(Integer, unique=True, index=True)
    email = Column(String(255), unique=True, index=True)
    hashed_password = Column(String(255))
    first_name = Column(String(255))
    last_name = Column(String(255))
    class_uid = Column(Integer, ForeignKey("CLASSROOM.uid"))

    classroom = relationship("Classroom", back_populates="students")
    register = relationship("LessonRegister", back_populates="students")

class Lesson(Base):
    __tablename__ = "LESSON"

    uid = Column(Integer, primary_key=True, index=True)
    description = Column(String(255))
    start_at = Column(DateTime)
    end_at = Column(DateTime)
    class_uid = Column(Integer, ForeignKey("CLASSROOM.uid"))
    professor_uid = Column(Integer, ForeignKey("PROFESSOR.uid"))

    classroom = relationship("Classroom", back_populates="lessons")
    professor = relationship("Professor", back_populates="lessons")
    register = relationship("LessonRegister", back_populates="lesson")

class LessonRegister(Base):
    __tablename__ = "LESSON_REGISTER"

    uid = Column(Integer, primary_key=True, index=True)
    lesson_uid = Column(Integer, ForeignKey("LESSON.uid"))
    student_uid = Column(Integer, ForeignKey("STUDENT.uid"))

    students = relationship("Student", back_populates="register")
    lesson = relationship("Lesson", back_populates="register")

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String(255), unique=True, index=True)
    hashed_password = Column(String(255))
    is_active = Column(Boolean, default=True)

    items = relationship("Item", back_populates="owner")


class Item(Base):
    __tablename__ = "items"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), index=True)
    description = Column(String(255), index=True)
    owner_id = Column(Integer, ForeignKey("users.id"))

    owner = relationship("User", back_populates="items")