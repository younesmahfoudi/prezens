import {Status} from "../../../core/domain/register/status.enum";
import {StudentElement} from "../../../student/components/student/student-element/student-element.model";

export interface RegisterElement{
    signature?: string;
    lesson_uid: number;
    uid: number;
    registered_students: RegisteredStudentElement[];
}

export interface RegisteredStudentElement{
    lesson_register_uid: number;
    student_uid: number;
    status: Status;
    proof?: string;
    uid: number;
    student: StudentElement;
}
