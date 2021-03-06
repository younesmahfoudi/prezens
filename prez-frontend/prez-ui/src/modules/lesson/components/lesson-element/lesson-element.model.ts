import {Register} from "../../../core/domain/register/register.model";

export interface LessonElement{
    description: string;
    start_at: Date;
    end_at: Date;
    class_uid: number;
    professor_name: string;
    uid: number;
    register: Register;
}
