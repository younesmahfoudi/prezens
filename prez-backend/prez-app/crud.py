import hashlib

from sqlalchemy import select, and_, or_
from sqlalchemy.orm import Session

from . import models, schemas


def encrypt_string(hash_string):
    sha_signature = \
        hashlib.sha256(hash_string.encode()).hexdigest()
    return sha_signature

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
    hashed_password = encrypt_string(admin.password)
    db_admin = models.Admin(
        email=admin.email,
        hashed_password=hashed_password,
        first_name=admin.first_name,
        last_name=admin.last_name
    )
    db.add(db_admin)
    db.commit()
    db.refresh(db_admin)
    return db_admin

def get_registered_admins_notifications(db: Session):
    return db \
        .query(models.RegisteredStudent) \
        .filter(
        models.RegisteredStudent.status == "PENDING"
    ).all()

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
    hashed_password = encrypt_string(professor.password)
    db_professor = models.Professor(
        email=professor.email,
        hashed_password=hashed_password,
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

def get_student_by_id(db: Session, id: int):
    return db.query(models.Student).filter(models.Student.student_id == id).first()

def create_student(db: Session, student: schemas.StudentCreate):
    hashed_password = encrypt_string(student.password)
    db_student = models.Student(
        email=student.email,
        hashed_password=hashed_password,
        student_id = student.student_id,
        first_name=student.first_name,
        last_name=student.last_name
    )
    db.add(db_student)
    db.commit()
    db.refresh(db_student)
    return db_student

def update_student_classroom(db: Session, classroom_uid: int, student_uid: int):
    db.query(models.Student) \
        .filter(models.Student.uid == student_uid) \
        .update({'class_uid': classroom_uid})
    db.commit()

def update_students_classroom(db: Session, classroom_uid: int, students: list[schemas.Student]):
    for student in students:
        db.query(models.Student) \
            .filter(models.Student.uid == student.uid) \
            .update({'class_uid': classroom_uid})
    db.commit()

def update_student(db: Session, db_student: schemas.Student, student: schemas.StudentUpdate):
    student_data = student.dict(exclude_unset=True)
    for key, value in student_data.items():
        setattr(db_student, key, value)
    db.add(db_student)
    db.commit()
    db.refresh(db_student)
    return db_student


'''    Classroom crud
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

def delete_registeredStudents(db: Session, register_uid: int):
    db.query(models.RegisteredStudent).filter(models.RegisteredStudent.lesson_register_uid == register_uid).delete()
    db.commit()

def get_registered_students(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.RegisteredStudent).offset(skip).limit(limit).all()

def get_registered_student_history(db: Session, student_uid: int, skip: int = 0, limit: int = 100):
    return db \
        .query(models.RegisteredStudent) \
        .filter(models.RegisteredStudent.student_uid == student_uid) \
        .offset(skip) \
        .limit(limit) \
        .all()

def get_registered_student_notifications(db: Session, student_uid: int):
    return db \
        .query(models.RegisteredStudent) \
        .filter(
        or_(
            models.RegisteredStudent.status == "PENDING",
            models.RegisteredStudent.status == "JUSTIFIED",
            models.RegisteredStudent.status == "DENIED"
        ),
        models.RegisteredStudent.student_uid == student_uid
    ).all()

def get_admin_notifications(db: Session):
    return db.query(models.RegisteredStudent).filter(models.RegisteredStudent.status == "PENDING").all()

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

def get_student_in_register(db: Session, student_uid: int, lesson_register_uid: int):
    stmt = select(
        models.RegisteredStudent.uid
    ).where(and_(
        models.RegisteredStudent.lesson_register_uid == lesson_register_uid,
        models.RegisteredStudent.student_uid == student_uid))
    return db.execute(stmt).first()

def update_registered_student_status(db: Session,registered_student_uid: int, status: str):
    db.query(models.RegisteredStudent) \
        .filter(models.RegisteredStudent.uid == registered_student_uid) \
        .update({'status': status})
    db.commit()

def update_registered_student(db: Session,db_registered_student: models.RegisteredStudent, registered_student):
    registered_student_data = registered_student.dict(exclude_unset=True)
    for key, value in registered_student_data.items():
        setattr(db_registered_student, key, value)
    db.add(db_registered_student)
    db.commit()
    db.refresh(db_registered_student)
    return db_registered_student

def create_registered_students(db: Session,registered_students: list[schemas.RegisteredStudentCreate]):
    for registered_student in registered_students:
        registered_student_tmp = models.RegisteredStudent(
            lesson_register_uid= registered_student.lesson_register_uid,
            student_uid=registered_student.student_uid,
            status=registered_student.status,
            proof=registered_student.proof
        )
        db.add(registered_student_tmp)
    db.commit()

'''
    LessonRegister crud
'''

def get_lesson_register(db: Session, lesson_register_uid: int):
    return db.query(models.LessonRegister).filter(models.LessonRegister.uid == lesson_register_uid).first()

def delete_lesson_register(db: Session, register_uid: int):
    db.query(models.LessonRegister).filter(models.LessonRegister.uid == register_uid).delete()
    db.commit()

def get_register_by_lesson(db: Session, lesson_uid: int):
    return db.query(models.LessonRegister).filter(models.LessonRegister.lesson_uid == lesson_uid).first()

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

def update_lesson_register_signature(db: Session, lesson_register_uid: int, signature: str):
    db.query(models.LessonRegister) \
        .filter(models.LessonRegister.uid == lesson_register_uid) \
        .update({'signature': signature})
    db.commit()

def init_lesson_register(db: Session, students: list[schemas.Student], register_uid: int):
    for student in students:
        registered_student_tmp = None
        registered_student_tmp = get_student_in_register(db, lesson_register_uid=register_uid, student_uid=student.uid)
        if not registered_student_tmp:
            registered_student_tmp = models.RegisteredStudent(
                lesson_register_uid=register_uid,
                student_uid=student.uid
            )
            db.add(registered_student_tmp)
    db.commit()

def update_registered_students_status(db: Session, registered_students: list[schemas.RegisteredStudent], register_uid: int):
    for student in registered_students:
        db.query(models.RegisteredStudent) \
            .filter(models.RegisteredStudent.uid == student.uid
                    and models.RegisteredStudent.lesson_register_uid == register_uid) \
            .update({'status': student.status})
    db.commit()

'''
    Lesson crud
'''

def get_lesson(db: Session, lesson_uid: int):
    return db.query(models.Lesson).filter(models.Lesson.uid == lesson_uid).first()

def delete_lesson(db: Session, lesson_uid: int):
    db.query(models.Lesson).filter(models.Lesson.uid == lesson_uid).delete()
    db.commit()

def get_lessons(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Lesson).offset(skip).limit(limit).all()

def create_lesson(db: Session, lesson: schemas.LessonCreate):
    db_lesson = models.Lesson(
        description=lesson.description,
        start_at=lesson.start_at,
        end_at=lesson.end_at,
        class_uid=lesson.class_uid,
        professor_uid=lesson.professor_uid
    )
    db.add(db_lesson)
    db.commit()
    db.refresh(db_lesson)
    return db_lesson

def get_lessons_by_professor(db: Session, professor_uid: int):
    return db.query(models.Lesson).filter(models.Lesson.professor_uid == professor_uid).all()

def get_lessons_by_classroom(db: Session, classroom_uid: int):
    return db.query(models.Lesson).filter(models.Lesson.class_uid == classroom_uid).all()

def get_lessons_by_classroom_professor(db: Session, classroom_uid: int, professor_uid: int):
    return db.query(models.Lesson).filter(models.Lesson.class_uid == classroom_uid and models.Lesson.professor_uid == professor_uid).all()

'''
    Common crud
'''


def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()

def delete_user(db: Session, uid: int):
    db.query(models.User).filter(models.User.uid == uid).delete()
    db.commit()

def add_user(db: Session, user: schemas.UserBase):
    db_user = models.User(
        email=user.email,
        role=user.role
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user