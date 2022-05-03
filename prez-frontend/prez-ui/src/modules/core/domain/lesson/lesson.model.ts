import {Professor} from "../professor/professor.model";

export interface Lesson{
    description: string;
    start_at: Date;
    end_at: Date;
    class_uid: number;
    professor_uid: number;
    uid: number;
    professor: Professor
}
