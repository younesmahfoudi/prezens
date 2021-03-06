from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.dialects.mysql import LONGTEXT

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
    registered = relationship("RegisteredStudent", back_populates="student")

class Lesson(Base):
    __tablename__ = "LESSON"

    uid = Column(Integer, primary_key=True, index=True)
    description = Column(String(255))
    start_at = Column(DateTime)
    end_at = Column(DateTime)
    class_uid = Column(Integer, ForeignKey("CLASSROOM.uid"))
    professor_uid = Column(Integer, ForeignKey("PROFESSOR.uid"))
    #lesson_register_uid = Column(Integer, ForeignKey("LESSON_REGISTER.uid"))

    classroom = relationship("Classroom", back_populates="lessons")
    professor = relationship("Professor", back_populates="lessons")
    lesson_register = relationship("LessonRegister", back_populates="lesson", uselist=False)

class LessonRegister(Base):
    __tablename__ = "LESSON_REGISTER"

    uid = Column(Integer, primary_key=True, index=True)
    lesson_uid = Column(Integer, ForeignKey("LESSON.uid"))
    signature = Column(LONGTEXT)

    lesson = relationship("Lesson", back_populates="lesson_register")
    registered_students = relationship("RegisteredStudent", back_populates="register")

class RegisteredStudent(Base):
    __tablename__ = "REGISTERED_STUDENT"

    uid = Column(Integer, primary_key=True, index=True)
    lesson_register_uid = Column(Integer, ForeignKey("LESSON_REGISTER.uid"))
    student_uid = Column(Integer, ForeignKey("STUDENT.uid"))
    status = Column(String(50), index=True, default="ABSENT")
    proof = Column(LONGTEXT)

    student = relationship("Student", back_populates="registered")
    register = relationship("LessonRegister", back_populates="registered_students")

class User(Base):
    __tablename__ = "USERS"

    uid = Column(Integer, primary_key=True, index=True)
    email = Column(String(255), unique=True, index=True)
    role = Column(String(255), index=True)

