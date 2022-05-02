import {Student} from "../student/student.model";

export interface Classroom{
    promotion: string;
    description: string;
    uid: number;
    students: Student[];
}
