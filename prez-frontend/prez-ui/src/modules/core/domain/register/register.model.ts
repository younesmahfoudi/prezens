import {Student} from "../student/student.model";
import {Status} from "./status.enum";

export interface Register{
    signature?: string;
    lesson_uid: number;
    uid: number;
    registered_students: RegisteredStudent[];
}

export interface RegisteredStudent{
    lesson_register_uid: number;
    student_uid: number;
    status: Status;
    proof?: string;
    uid: number;
    student: Student;
}

export interface RegisteredStudentUpdate{
    status?: Status;
    proof?: string;
}
