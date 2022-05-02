from datetime import datetime

from pydantic import BaseModel

""" Admin Model.

   Attributs
   ----------
   
   uid: int
   email: str
   password: str
   first_name: str
   last_name: str
   
   -------

"""

class AdminBase(BaseModel):
    email: str
    first_name: str
    last_name: str

class AdminCreate(AdminBase):
    password: str

class Admin(AdminBase):
    uid: int

    class Config:
        orm_mode = True

""" Student Model.

   Attributs
   ----------
   
   uid: int
   email: str
   password: str
   first_name: str
   last_name: str
   student_id: int
   class_uid: int | None 
   
   -------

"""

class StudentBase(BaseModel):
    email: str
    student_id: int
    first_name: str
    last_name: str

class StudentCreate(StudentBase):
    password: str

class Student(StudentBase):
    uid: int
    class_uid: int | None = None

    class Config:
        orm_mode = True

class StudentUpdate(BaseModel):
    email: str | None = None
    password: str | None = None
    class_uid: int | None = None

    class Config:
        orm_mode = True

""" Professeur Model.

   Attributs
   ----------
   
   uid: int
   email: str
   password: str
   first_name: str
   last_name: str
   lessons: list[Lesson]
   
   -------

"""

class ProfessorBase(BaseModel):
    email: str
    first_name: str
    last_name: str

class ProfessorCreate(ProfessorBase):
    password: str

class Professor(ProfessorBase):
    uid: int
    #lessons: list[Lesson] = []

    class Config:
        orm_mode = True

""" Lesson Model.

   Attributs
   ----------
   
   uid: int
   description: str
   start_at: datetime
   end_at: datetime
   class_uid: int
   professor_uid: int
   lesson_register_uid: int | None 
   
   -------

"""

class LessonBase(BaseModel):
    description: str
    start_at: datetime
    end_at: datetime
    class_uid: int
    professor_uid: int

    class Config:
        arbitrary_types_allowed: True
        orm_mode = True

class LessonCreate(LessonBase):
    pass

class Lesson(LessonBase):
    uid: int
    #lesson_register: LessonRegister | None = None
    professor: Professor

    class Config:
        orm_mode = True

""" RegisteredStudent Model.

   Attributs
   ----------
   
   uid: int
   status: str 
   proof: str | None 
   lesson_register_uid: int
   student_uid: int
   
   -------

"""

class RegisteredStudentBase(BaseModel):
    lesson_register_uid: int
    student_uid: int
    status: str = 'ABSENT'
    proof: str | None = None

class RegisteredStudentCreate(RegisteredStudentBase):
    pass

class RegisteredStudent(RegisteredStudentBase):
    uid: int
    student: Student

    class Config:
        orm_mode = True

""" LessonRegister Model.

   Attributs
   ----------
   
   uid: int
   signature: str | None 
   registered_students: list[RegisteredStudent]
   
   -------

"""

class LessonRegisterBase(BaseModel):
    signature: str | None = None
    lesson_uid: int

class LessonRegisterCreate(LessonRegisterBase):
    pass

class LessonRegisterUpdate(BaseModel):
    signature: str

class LessonRegister(LessonRegisterBase):
    uid: int
    registered_students: list[RegisteredStudent] = []

    class Config:
        orm_mode = True

""" Classroom Model.

   Attributs
   ----------
   
   uid: int
   promotion: str
   description: str
   students: list[Student] 
   lessons: list[Lesson] 
   
   -------

"""


class ClassroomBase(BaseModel):
    promotion: str
    description: str

class ClassroomCreate(ClassroomBase):
    pass

class Classroom(ClassroomBase):
    uid: int
    students: list[Student] = []
    #lessons: list[Lesson] = []

    class Config:
        orm_mode = True

""" UserLogin Model.

   Attributs
   ----------
   
   email: str
   password: str
   
   -------

"""

class UserLogin(BaseModel):
    email: str
    password: str

    class Config:
        orm_mode: True
