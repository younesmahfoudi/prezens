import {StudentElement} from "../../../student/components/student/student-element/student-element.model";

export interface ClassroomElement{
    promotion: string;
    description: string;
    uid: number;
    students: StudentElement[];
}
