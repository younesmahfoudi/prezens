import {Professor} from "../professor/professor.model";
import {Register} from "../register/register.model";

export interface Lesson{
    description: string;
    start_at: Date;
    end_at: Date;
    class_uid: number;
    professor_uid: number;
    uid: number;
    lesson_register: Register;
    professor: Professor
}

export interface LessonPost{
    description: string;
    start_at: Date;
    end_at: Date;
    class_uid: number;
    professor_uid: number;
}
