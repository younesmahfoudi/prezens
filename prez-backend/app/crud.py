from sqlalchemy.orm import Session

from . import models, schemas

'''
    Admin crud
'''

def get_admin(db: Session, admin_id: int):
    return db.query(models.Admin).filter(models.Admin.uid == admin_id).first()


def get_admins(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Admin).offset(skip).limit(limit).all()


def get_admin_by_email(db: Session, email: str):
    return db.query(models.Admin).filter(models.Admin.email == email).first()


def create_admin(db: Session, admin: schemas.AdminCreate):
    fake_hashed_password = admin.password + "notreallyhashed"
    db_admin = models.Admin(
        email=admin.email,
        hashed_password=fake_hashed_password,
        first_name=admin.first_name,
        last_name=admin.last_name
    )
    db.add(db_admin)
    db.commit()
    db.refresh(db_admin)
    return db_admin

'''
    Professor crud
'''

def get_professor(db: Session, professor_id: int):
    return db.query(models.Professor).filter(models.Professor.uid == professor_id).first()


def get_professors(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Professor).offset(skip).limit(limit).all()


def get_professor_by_email(db: Session, email: str):
    return db.query(models.Professor).filter(models.Professor.email == email).first()


def create_professor(db: Session, professor: schemas.ProfessorCreate):
    fake_hashed_password = professor.password + "notreallyhashed"
    db_professor = models.Professor(
        email=professor.email,
        hashed_password=fake_hashed_password,
        first_name=professor.first_name,
        last_name=professor.last_name
    )
    db.add(db_professor)
    db.commit()
    db.refresh(db_professor)
    return db_professor

'''
    Student crud
'''

def get_student(db: Session, student_uid: int):
    return db.query(models.Student).filter(models.Student.uid == student_uid).first()


def get_students(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Student).offset(skip).limit(limit).all()


def get_student_by_email(db: Session, email: str):
    return db.query(models.Student).filter(models.Student.email == email).first()


def create_student(db: Session, student: schemas.StudentCreate):
    fake_hashed_password = student.password + "notreallyhashed"
    db_student = models.Student(
        email=student.email,
        hashed_password=fake_hashed_password,
        student_id = student.student_id,
        first_name=student.first_name,
        last_name=student.last_name
    )
    db.add(db_student)
    db.commit()
    db.refresh(db_student)
    return db_student

def update_student_classroom(db: Session, classroom_uid: int, student_uid: int):
    db.query(models.Student)\
        .filter(models.Student.uid == student_uid)\
        .update({'class_uid': classroom_uid})
    db.commit()

'''
    Classroom crud
'''

def get_classroom(db: Session, classroom_uid: int):
    return db.query(models.Classroom).filter(models.Classroom.uid == classroom_uid).first()

def get_classrooms(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Classroom).offset(skip).limit(limit).all()

def create_classroom(db: Session, classroom: schemas.ClassroomCreate):
    db_classroom = models.Classroom(promotion= classroom.promotion,description= classroom.description)
    db.add(db_classroom)
    db.commit()
    db.refresh(db_classroom)
    return db_classroom

'''
    RegisteredStudent crud
'''

def get_registered_student(db: Session, registered_student_uid: int):
    return db.query(models.RegisteredStudent).filter(models.RegisteredStudent.uid == registered_student_uid).first()

def get_registered_students(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.RegisteredStudent).offset(skip).limit(limit).all()

def create_registered_student(db: Session,registered_student: schemas.RegisteredStudentCreate):
    db_registered_student = models.RegisteredStudent(
        lesson_register_uid= registered_student.lesson_register_uid,
        student_uid=registered_student.student_uid,
        status=registered_student.status,
        proof=registered_student.proof
    )
    db.add(db_registered_student)
    db.commit()
    db.refresh(db_registered_student)
    return db_registered_student

'''
    LessonRegister crud
'''

def get_lesson_register(db: Session, lesson_register_uid: int):
    return db.query(models.LessonRegister).filter(models.LessonRegister.uid == lesson_register_uid).first()

def get_lesson_registers(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.LessonRegister).offset(skip).limit(limit).all()

def create_lesson_register(db: Session, lesson_register: schemas.LessonRegisterCreate):
    db_lesson_register = models.LessonRegister(
        lesson_uid=lesson_register.lesson_uid,
        signature=lesson_register.signature
    )
    db.add(db_lesson_register)
    db.commit()
    db.refresh(db_lesson_register)
    return db_lesson_register

'''
    Lesson crud
'''

def get_lesson(db: Session, lesson_uid: int):
    return db.query(models.Lesson).filter(models.Lesson.uid == lesson_uid).first()

def get_lessons(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Lesson).offset(skip).limit(limit).all()

def create_lesson(db: Session, lesson: schemas.LessonCreate):
    db_lesson = models.Lesson(
        description=lesson.description,
        start_at=lesson.start_at,
        end_at=lesson.end_at,
        class_uid=lesson.class_uid,
        professor_uid=lesson.class_uid
    )
    db.add(db_lesson)
    db.commit()
    db.refresh(db_lesson)
    return db_lesson

"""
    A remove
"""


def get_user(db: Session, user_id: int):
    return db.query(models.User).filter(models.User.id == user_id).first()


def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()


def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.User).offset(skip).limit(limit).all()


def create_user(db: Session, user: schemas.UserCreate):
    fake_hashed_password = user.password + "notreallyhashed"
    db_user = models.User(email=user.email, hashed_password=fake_hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


def get_items(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Item).offset(skip).limit(limit).all()


def create_user_item(db: Session, item: schemas.ItemCreate, user_id: int):
    db_item = models.Item(**item.dict(), owner_id=user_id)
    db.add(db_item)
    db.commit()
    db.refresh(db_item)
    return db_item
