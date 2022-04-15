import uvicorn
from fastapi import Depends, FastAPI, HTTPException
from sqlalchemy.orm import Session

from . import crud, models, schemas
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()


# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

'''
    Admins routes
'''

@app.post("/admins/", response_model=schemas.Admin)
def create_admin(admin: schemas.AdminCreate, db: Session = Depends(get_db)):
    db_admin = crud.get_admin_by_email(db, email=admin.email)
    if db_admin:
        raise HTTPException(status_code=400, detail="Email already registered")
    return crud.create_admin(db=db, admin=admin)

@app.get("/admins/", response_model=list[schemas.Admin])
def read_admins(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    admins = crud.get_admins(db, skip=skip, limit=limit)
    return admins

'''
    Professors routes
'''

@app.post("/professors/", response_model=schemas.Professor)
def create_professor(professor: schemas.ProfessorCreate, db: Session = Depends(get_db)):
    db_professor = crud.get_professor_by_email(db, email=professor.email)
    if db_professor:
        raise HTTPException(status_code=400, detail="Email already registered")
    return crud.create_professor(db=db, professor=professor)

@app.get("/professors/", response_model=list[schemas.Professor])
def read_professors(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    professors = crud.get_professors(db, skip=skip, limit=limit)
    return professors

'''
    Students routes
'''

@app.post("/students/", response_model=schemas.Student)
def create_student(student: schemas.StudentCreate, db: Session = Depends(get_db)):
    db_student = crud.get_student_by_email(db, email=student.email)
    if db_student:
        raise HTTPException(status_code=400, detail="Email already registered")
    return crud.create_student(db=db, student=student)

@app.get("/students/", response_model=list[schemas.Student])
def read_students(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    students = crud.get_students(db, skip=skip, limit=limit)
    return students

@app.put("/students/{student_uid}/classroom/", response_model=schemas.Student)
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

'''
    Classrooms routes
'''

@app.post("/classrooms/", response_model=schemas.Classroom)
def create_classroom(classroom: schemas.ClassroomCreate, db: Session = Depends(get_db)):
    db_classroom = crud.create_classroom(db=db, classroom=classroom)
    return db_classroom

@app.get("/classrooms/", response_model=list[schemas.Classroom])
def read_classrooms(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    classrooms = crud.get_classrooms(db, skip=skip, limit=limit)
    return classrooms

@app.get("/classrooms/{classroom_uid}", response_model=schemas.Classroom)
def read_classroom(classroom_uid: int, db: Session = Depends(get_db)):
    classroom = crud.get_classroom(db, classroom_uid=classroom_uid)
    return classroom

@app.get("/classrooms/{classroom_uid}/students", response_model=list[schemas.Student])
def read_classroom_students(classroom_uid: int, db: Session = Depends(get_db)):
    classroom = crud.get_classroom(db, classroom_uid=classroom_uid)
    return classroom.students

'''
    LessonRegister routes
'''

@app.post("/register/", response_model=schemas.LessonRegister)
def create_lesson_register(lesson_register: schemas.LessonRegisterCreate, db: Session = Depends(get_db)):
    db_lesson = crud.get_lesson(db, lesson_register.lesson_uid)
    if not db_lesson:
        raise HTTPException(status_code=404, detail="Classroom not found")
    db_lesson_register = crud.create_lesson_register(db=db, lesson_register=lesson_register)
    return db_lesson_register


'''
    Lesson routes
'''

@app.post("/lesson/", response_model=schemas.Lesson)
def create_lesson(lesson: schemas.LessonCreate, db: Session = Depends(get_db)):
    db_professor = crud.get_professor(db, lesson.professor_uid)
    db_classroom = crud.get_classroom(db, lesson.class_uid)
    if (not db_classroom or not db_professor):
        raise HTTPException(status_code=404, detail="classroom or professor invalid")
    db_lesson = crud.create_lesson(db=db, lesson=lesson)
    return db_lesson

@app.get("/lessons/", response_model=list[schemas.Lesson])
def read_lessons(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    lessons = crud.get_lessons(db, skip=skip, limit=limit)
    return lessons

@app.get("/lesson/{lesson_uid}/register", response_model=schemas.LessonRegister)
def read_lesson_register(lesson_uid: int, db: Session = Depends(get_db)):
    lesson = crud.get_lesson(db, lesson_uid=lesson_uid)
    if not lesson:
        raise HTTPException(status_code=404, detail="lesson not found")
    if not lesson.lesson_register:
        lesson_register = schemas.LessonRegisterCreate(lesson_uid=lesson_uid)
        db_lesson_register = crud.create_lesson_register(db, lesson_register)

    return
'''
    Lesson routes
'''

@app.post("/registeredstudent/", response_model=schemas.RegisteredStudent)
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

@app.post("/registeredstudents/", response_model=list[schemas.RegisteredStudent])
def create_registered_student(registered_students: list[schemas.RegisteredStudentCreate], db: Session = Depends(get_db)):
    db_registered_students = crud.create_registered_students(db=db, registered_students=registered_students)
    return db_registered_students

@app.put("/registeredstudent/{registered_student_uid}", response_model=schemas.RegisteredStudent)
def update_registered_student(registered_student_uid: int ,status: str, db: Session = Depends(get_db)):
    db_registered_student = crud.get_registered_student(db, registered_student_uid=registered_student_uid)
    if not db_registered_student:
        raise HTTPException(status_code=404, detail="registered student not found")
    crud.update_registered_student_status(db, registered_student=db_registered_student, status=status)
    db_registered_student = crud.get_registered_student(db=db, registered_student_uid=registered_student_uid)
    return db_registered_student