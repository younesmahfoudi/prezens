import {ClassroomElement} from "../../../classroom/components/classroom-element/classroom-element.model";

export interface LessonElement{
    description: string;
    start_at: Date;
    end_at: Date;
    class_uid: number;
    professor_name: string;
    uid: number;
}
