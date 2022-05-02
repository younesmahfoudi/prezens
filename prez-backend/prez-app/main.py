from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session
from starlette.middleware.cors import CORSMiddleware

from . import crud, models, schemas, auth_handler, auth_bearer
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

"""
    Common routes
"""

def check_user(data: schemas.UserLogin, user: schemas.StudentCreate |
                                              schemas.ProfessorCreate |
                                              schemas.AdminCreate):
    if user.email == data.email and user.hashed_password == data.password:
        return True
    return False

@app.post("/user/login", tags=["common"])
def user_login(user: schemas.UserLogin, db: Session = Depends(get_db)):
    user.password = crud.encrypt_string(user.password)
    professor = crud.get_professor_by_email(db, email=user.email)
    if professor and check_user(user, professor):
        return auth_handler.signJWT(user_uid=professor.uid, role="professor")
    student = crud.get_student_by_email(db, email=user.email)
    if student and check_user(user, student):
        return auth_handler.signJWT(user_uid=student.uid, role="student")
    admin = crud.get_admin_by_email(db, email=user.email)
    if admin and check_user(user, admin):
        return auth_handler.signJWT(user_uid=admin.uid,role="admin")
    raise HTTPException(status_code=400, detail="Wrong login details!")

'''
    Admins routes
'''

@app.post("/admins/", response_model=schemas.Admin, tags=["admin"])
def create_admin(admin: schemas.AdminCreate, db: Session = Depends(get_db)):
    db_admin = crud.get_admin_by_email(db, email=admin.email)
    if db_admin:
        raise HTTPException(status_code=400, detail="Email already registered")
    return crud.create_admin(db=db, admin=admin)

@app.get("/admins/", response_model=list[schemas.Admin], tags=["admin"], dependencies=[Depends(auth_bearer.JWTBearer())])
def read_admins(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    admins = crud.get_admins(db, skip=skip, limit=limit)
    return admins

'''
    Professors routes
'''

@app.post("/professors/", response_model=schemas.Professor, tags=["professors"])
def create_professor(professor: schemas.ProfessorCreate, db: Session = Depends(get_db)):
    db_professor = crud.get_professor_by_email(db, email=professor.email)
    if db_professor:
        raise HTTPException(status_code=400, detail="Email already registered")
    return crud.create_professor(db=db, professor=professor)

@app.get("/professors/", response_model=list[schemas.Professor], tags=["professors"], dependencies=[Depends(auth_bearer.JWTBearer())])
def read_professors(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    professors = crud.get_professors(db, skip=skip, limit=limit)
    return professors

@app.get("/professors/{professor_uid}", response_model=schemas.Professor, tags=["professors"], dependencies=[Depends(auth_bearer.JWTBearer())])
def read_professor(professor_uid: int, db: Session = Depends(get_db)):
    professor = crud.get_professor(db, professor_id=professor_uid)
    return professor

@app.get("/professors/{professor_uid}/lessons", response_model=list[schemas.Lesson], tags=["professors"], dependencies=[Depends(auth_bearer.JWTBearer())])
def read_professor_lessons(professor_uid: int, db: Session = Depends(get_db)):
    professor = crud.get_professor(db, professor_id=professor_uid)
    if not professor:
        raise HTTPException(status_code=404, detail="Professor not found")
    lessons = crud.get_lessons_by_professor(db, professor_uid=professor_uid)
    return lessons

@app.post("/professors/signup", response_model=auth_handler.Token, tags=["professors"])
async def create_user(professor: schemas.ProfessorCreate, db: Session = Depends(get_db)):
    db_professor = crud.get_professor_by_email(db, email=professor.email)
    if db_professor:
        raise HTTPException(status_code=400, detail="Email already registered")
    db_professor = crud.create_professor(db=db, professor=professor)
    return auth_handler.signJWT(user_uid=db_professor.uid, role="professor")

'''
    Students routes
'''

@app.post("/students/", response_model=schemas.Student, tags=["students"])
def create_student(student: schemas.StudentCreate, db: Session = Depends(get_db)):
    db_student = crud.get_student_by_email(db, email=student.email)
    if db_student:
        raise HTTPException(status_code=400, detail="Email already registered")
    db_student = crud.get_student_by_id(db, id=student.student_id)
    if db_student:
        raise HTTPException(status_code=400, detail="Student id already registered")
    return crud.create_student(db=db, student=student)

@app.get("/students/", response_model=list[schemas.Student], tags=["students"], dependencies=[Depends(auth_bearer.JWTBearer())])
def read_students(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    students = crud.get_students(db, skip=skip, limit=limit)
    return students

@app.get("/students/{student_uid}", response_model=schemas.Student, tags=["students"], dependencies=[Depends(auth_bearer.JWTBearer())])
def read_student(
        student_uid: int,
        db: Session = Depends(get_db)
):
    db_student = crud.get_student(db, student_uid=student_uid)
    if db_student is None:
        raise HTTPException(status_code=404, detail="Student not found")
    return db_student

@app.get("/students/{student_uid}/history", response_model=list[schemas.RegisteredStudent], tags=["students"], dependencies=[Depends(auth_bearer.JWTBearer())])
def read_student(
        student_uid: int,
        db: Session = Depends(get_db)
):
    db_student = crud.get_student(db, student_uid=student_uid)
    if db_student is None:
        raise HTTPException(status_code=404, detail="Student not found")
    db_history = crud.get_registered_student_history(db, student_uid=db_student.uid)
    return db_history

@app.get("/students/{student_uid}/lessons", response_model=list[schemas.Lesson], tags=["students"], dependencies=[Depends(auth_bearer.JWTBearer())])
def read_student(
        student_uid: int,
        db: Session = Depends(get_db)
):
    db_student = crud.get_student(db, student_uid=student_uid)
    if db_student is None:
        raise HTTPException(status_code=404, detail="Student not found")
    if db_student.class_uid is None:
        raise HTTPException(status_code=404, detail="Classroom not found")
    db_lessons = crud.get_lessons_by_classroom(db, classroom_uid=db_student.class_uid)
    return db_lessons

@app.put("/students/{student_uid}/classrooms/{classroom_uid}", response_model=schemas.Student, tags=["students"], dependencies=[Depends(auth_bearer.JWTBearer())])
def update_student_classroom(
        student_uid: int,
        classroom_uid: int,
        db: Session = Depends(get_db)
):
    db_student = crud.get_student(db, student_uid=student_uid)
    if db_student is None:
        raise HTTPException(status_code=404, detail="Student not found")
    crud.update_student_classroom(db=db, student_uid=student_uid, classroom_uid=classroom_uid)
    return db_student

@app.put("/students/{student_uid}", response_model=schemas.Student, tags=["students"], dependencies=[Depends(auth_bearer.JWTBearer())])
def update_student(
        student_uid: int,
        student: schemas.StudentUpdate,
        db: Session = Depends(get_db)
):
    db_student = crud.get_student(db, student_uid=student_uid)
    if db_student is None:
        raise HTTPException(status_code=404, detail="Student not found")
    db_student = crud.update_student(db=db, db_student=db_student, student=student)
    return db_student


@app.post("/students/signup", response_model=auth_handler.Token, tags=["students"])
async def create_user(student: schemas.StudentCreate, db: Session = Depends(get_db)):
    db_student = crud.get_student_by_email(db, email=student.email)
    if db_student:
        raise HTTPException(status_code=400, detail="Email already registered")
    db_student = crud.create_student(db=db, student=student)
    return auth_handler.signJWT(user_uid=db_student.uid, role="student")

'''
    Classrooms routes
'''

@app.post("/classrooms/", response_model=schemas.Classroom, tags=["classrooms"], dependencies=[Depends(auth_bearer.JWTBearer())])
def create_classroom(classroom: schemas.ClassroomCreate, db: Session = Depends(get_db)):
    db_classroom = crud.create_classroom(db=db, classroom=classroom)
    return db_classroom

@app.get("/classrooms/", response_model=list[schemas.Classroom], tags=["classrooms"], dependencies=[Depends(auth_bearer.JWTBearer())])
def read_classrooms(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    classrooms = crud.get_classrooms(db, skip=skip, limit=limit)
    return classrooms

@app.get("/classrooms/{classroom_uid}", response_model=schemas.Classroom, tags=["classrooms"], dependencies=[Depends(auth_bearer.JWTBearer())])
def read_classroom(classroom_uid: int, db: Session = Depends(get_db)):
    classroom = crud.get_classroom(db, classroom_uid=classroom_uid)
    return classroom

@app.get("/classrooms/{classroom_uid}/students", response_model=list[schemas.Student], tags=["classrooms"], dependencies=[Depends(auth_bearer.JWTBearer())])
def read_classroom_students(classroom_uid: int, db: Session = Depends(get_db)):
    classroom = crud.get_classroom(db, classroom_uid=classroom_uid)
    return classroom.students

@app.put("/classrooms/{classroom_uid}/students", response_model=list[schemas.Student], tags=["classrooms"], dependencies=[Depends(auth_bearer.JWTBearer())])
def update_students_classroom(classroom_uid: int, students: list[schemas.Student],db: Session = Depends(get_db)):
    crud.update_students_classroom(db, classroom_uid=classroom_uid,students=students)
    classroom = crud.get_classroom(db, classroom_uid=classroom_uid)
    return classroom.students

@app.get("/classrooms/{classroom_uid}/lessons", response_model=list[schemas.Lesson], tags=["classrooms"], dependencies=[Depends(auth_bearer.JWTBearer())])
def read_classroom_lessons(classroom_uid: int, db: Session = Depends(get_db)):
    classroom = crud.get_classroom(db, classroom_uid=classroom_uid)
    if not classroom:
        raise HTTPException(status_code=404, detail="Classroom not found")
    lessons = crud.get_lessons_by_classroom(db, classroom_uid=classroom_uid)
    return lessons

'''
    LessonRegister routes
'''

@app.post("/register/", response_model=schemas.LessonRegister, tags=["registers"], dependencies=[Depends(auth_bearer.JWTBearer())])
def create_lesson_register(lesson_register: schemas.LessonRegisterCreate, db: Session = Depends(get_db)):
    db_lesson = crud.get_lesson(db, lesson_register.lesson_uid)
    if not db_lesson:
        raise HTTPException(status_code=404, detail="Lesson not found")
    db_lesson_register = crud.create_lesson_register(db=db, lesson_register=lesson_register)
    return db_lesson_register

@app.put("/register/{register_uid}/sign", response_model=schemas.LessonRegister, tags=["registers"], dependencies=[Depends(auth_bearer.JWTBearer())])
def update_lesson_register_signature(register_uid: int, lesson_register: schemas.LessonRegisterUpdate, db: Session = Depends(get_db)):
    db_lesson_register = crud.get_lesson_register(db, lesson_register_uid=register_uid)
    if not db_lesson_register:
        raise HTTPException(status_code=404, detail="Register not found")
    crud.update_lesson_register_signature(db=db, lesson_register_uid=register_uid, signature=lesson_register.signature)
    db.refresh(db_lesson_register)
    return db_lesson_register

@app.put("/register/{register_uid}/init", response_model=schemas.LessonRegister, tags=["registers"], dependencies=[Depends(auth_bearer.JWTBearer())])
def read_classroom_lessons(register_uid: int, students: list[schemas.Student], db: Session = Depends(get_db)):
    register = crud.get_lesson_register(db, lesson_register_uid=register_uid)
    if not register:
        raise HTTPException(status_code=404, detail="Register not found")
    crud.init_lesson_register(db, students=students, register_uid=register_uid)
    db.refresh(register)
    return register

@app.get("/register/{register_uid}/lesson", response_model=schemas.Lesson, tags=["registers"], dependencies=[Depends(auth_bearer.JWTBearer())])
def read_register_lesson(register_uid: int, db: Session = Depends(get_db)):
    register = crud.get_lesson_register(db, lesson_register_uid=register_uid)
    if not register:
        raise HTTPException(status_code=404, detail="Register not found")
    db_lesson = crud.get_lesson(db, lesson_uid=register.lesson_uid)
    if not db_lesson:
        raise HTTPException(status_code=404, detail="Lesson not found")
    return db_lesson

@app.put("/register/{register_uid}/update", response_model=schemas.LessonRegister, tags=["registers"], dependencies=[Depends(auth_bearer.JWTBearer())])
def read_classroom_lessons(register_uid: int, students: list[schemas.RegisteredStudent], db: Session = Depends(get_db)):
    register = crud.get_lesson_register(db, lesson_register_uid=register_uid)
    if not register:
        raise HTTPException(status_code=404, detail="Register not found")
    crud.update_registered_students_status(db, registered_students=students, register_uid=register_uid)
    db.refresh(register)
    return register

'''
    Lesson routes
'''

@app.post("/lessons/", response_model=schemas.Lesson, tags=["lessons"], dependencies=[Depends(auth_bearer.JWTBearer())])
def create_lesson(lesson: schemas.LessonCreate, db: Session = Depends(get_db)):
    db_professor = crud.get_professor(db, lesson.professor_uid)
    db_classroom = crud.get_classroom(db, lesson.class_uid)
    if (not db_classroom or not db_professor):
        raise HTTPException(status_code=404, detail="classroom or professor invalid")
    db_lesson = crud.create_lesson(db=db, lesson=lesson)
    if db_lesson:
        lesson_register = schemas.LessonRegisterCreate(
            lesson_uid=db_lesson.uid
        )
        crud.create_lesson_register(db, lesson_register=lesson_register)
    return db_lesson

@app.get("/lessons/", response_model=list[schemas.Lesson], tags=["lessons"], dependencies=[Depends(auth_bearer.JWTBearer())])
def read_lessons(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    lessons = crud.get_lessons(db, skip=skip, limit=limit)
    return lessons

@app.get("/lessons/{lesson_uid}/register", response_model=schemas.LessonRegister, tags=["lessons"], dependencies=[Depends(auth_bearer.JWTBearer())])
def read_lesson_register(lesson_uid: int, db: Session = Depends(get_db)):
    db_lesson = crud.get_lesson(db, lesson_uid=lesson_uid)
    if not db_lesson:
        raise HTTPException(status_code=404, detail="lesson not found")
    db_lesson_register = crud.get_register_by_lesson(db, lesson_uid=lesson_uid)
    return db_lesson_register

@app.post("/lessons/{lesson_uid}/register", response_model=schemas.LessonRegister, tags=["lessons"], dependencies=[Depends(auth_bearer.JWTBearer())])
def create_lesson_register(lesson_uid: int, db: Session = Depends(get_db)):
    db_lesson = crud.get_lesson(db, lesson_uid=lesson_uid)
    if not db_lesson:
        raise HTTPException(status_code=404, detail="lesson not found")
    lesson_register = schemas.LessonRegisterCreate(
        lesson_uid=lesson_uid
    )
    db_lesson_register = crud.create_lesson_register(db, lesson_register=lesson_register)
    return db_lesson_register

@app.post("/lessons/{lesson_uid}/registeredstudents", response_model=schemas.Lesson, tags=["lessons"], dependencies=[Depends(auth_bearer.JWTBearer())])
def add_registered_students(lesson_uid: int,registered_students: list[schemas.RegisteredStudentCreate], db: Session = Depends(get_db)):
    db_lesson = crud.get_lesson(db, lesson_uid=lesson_uid)
    if not db_lesson:
        raise HTTPException(status_code=404, detail="Lesson not found")
    if not db_lesson.lesson_register:
        raise HTTPException(status_code=404, detail="Register not found")
    crud.create_registered_students(db, registered_students=registered_students)
    return db_lesson


@app.get("/lessons/{lesson_uid}", response_model=schemas.Lesson, tags=["lessons"], dependencies=[Depends(auth_bearer.JWTBearer())])
def read_lesson(lesson_uid: int, db: Session = Depends(get_db)):
    db_lesson = crud.get_lesson(db, lesson_uid=lesson_uid)
    if not db_lesson:
        raise HTTPException(status_code=404, detail="lesson not found")
    return db_lesson

'''
    Registered student routes
'''

@app.post("/registeredstudent/", response_model=schemas.RegisteredStudent, tags=["registered students"], dependencies=[Depends(auth_bearer.JWTBearer())])
def create_registered_student(registered_student: schemas.RegisteredStudentCreate, db: Session = Depends(get_db)):
    db_register = crud.get_lesson_register(db, registered_student.lesson_register_uid)
    db_student = crud.get_student(db, registered_student.student_uid)
    if (not db_student or not db_register):
        raise HTTPException(status_code=404, detail="register or student invalid")
    db_registered_student = crud.get_student_in_register(db, student_uid=registered_student.student_uid, lesson_register_uid=registered_student.lesson_register_uid)
    if (db_registered_student):
        raise HTTPException(status_code=404, detail="student already registered")
    db_registered_student = crud.create_registered_student(db=db, registered_student=registered_student)
    return db_registered_student

@app.post("/registeredstudents/", response_model=list[schemas.RegisteredStudent], tags=["registered students"], dependencies=[Depends(auth_bearer.JWTBearer())])
def create_registered_student(registered_students: list[schemas.RegisteredStudentCreate], db: Session = Depends(get_db)):
    #db_registered_students = crud.create_registered_students(db=db, registered_students=registered_students)
    db_registered_students = []
    for registered_student in registered_students:
        db_register = crud.get_lesson_register(db, registered_student.lesson_register_uid)
        db_student = crud.get_student(db, registered_student.student_uid)
        if (not db_student or not db_register):
            raise HTTPException(status_code=404, detail="register or student invalid")
        db_registered_student = crud.get_student_in_register(db, student_uid=registered_student.student_uid, lesson_register_uid=registered_student.lesson_register_uid)
        if (db_registered_student):
            raise HTTPException(status_code=404, detail="student already registered")
        registered_students.append(crud.create_registered_student(db=db, registered_student=registered_student))
    return db_registered_students

@app.put("/registeredstudent/{registered_student_uid}", response_model=schemas.RegisteredStudent, tags=["registered students"], dependencies=[Depends(auth_bearer.JWTBearer())])
def update_registered_student(registered_student_uid: int ,status: str, db: Session = Depends(get_db)):
    db_registered_student = crud.get_registered_student(db, registered_student_uid=registered_student_uid)
    if not db_registered_student:
        raise HTTPException(status_code=404, detail="registered student not found")
    crud.update_registered_student_status(db, registered_student=db_registered_student, status=status)
    db_registered_student = crud.get_registered_student(db=db, registered_student_uid=registered_student_uid)
    return db_registered_student

