from datetime import datetime
from pydantic import BaseModel



class AdminBase(BaseModel):
    email: str
    first_name: str
    lastname: str

class AdminCreate(AdminBase):
    password: str

class Admin(AdminBase):
    uid: int

    class Config:
        orm_mode = True


class StudentBase(BaseModel):
    email: str
    student_id: int
    first_name: str
    lastname: str
    class_uid: int

class StudentCreate(StudentBase):
    password: str

class Student(StudentBase):
    uid: int
    class_uid: int | None = None

    class Config:
        orm_mode = True


class LessonBase(BaseModel):
    description: str
    start_at: datetime
    end_at: datetime
    class_uid: int
    professor_uid: int
    lesson_register_uid: int | None = None

    class Config:
        arbitrary_types_allowed: True
        orm_mode = True

class LessonCreate(LessonBase):
    pass

class Lesson(LessonBase):
    uid: int

    class Config:
        orm_mode = True


class RegisteredStudentBase(BaseModel):
    status: str = 'ABSENT'
    proof: str | None = None

class RegisteredStudentCreate(RegisteredStudentBase):
    pass

class RegisteredStudent(RegisteredStudentBase):
    lesson_register_uid = int
    student_uid = int

    class Config:
        orm_mode = True


class LessonRegisterBase(BaseModel):
    signature: str | None = None

class LessonRegisterCreate(LessonRegisterBase):
    pass

class LessonRegister(LessonRegisterBase):
    uid: str
    registered_students: list[RegisteredStudent] = []


class ProfessorBase(BaseModel):
    email: str
    first_name: str
    lastname: str

class ProfessorCreate(ProfessorBase):
    password: str

class Professor(ProfessorBase):
    uid: int
    lessons: list[Lesson] = []

    class Config:
        orm_mode = True


class ItemBase(BaseModel):
    title: str
    description: str | None = None


class ItemCreate(ItemBase):
    pass


class Item(ItemBase):
    id: int
    owner_id: int

    class Config:
        orm_mode = True


class UserBase(BaseModel):
    email: str


class UserCreate(UserBase):
    password: str


class User(UserBase):
    id: int
    is_active: bool
    items: list[Item] = []

    class Config:
        orm_mode = True