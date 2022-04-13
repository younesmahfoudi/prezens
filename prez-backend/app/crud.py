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
