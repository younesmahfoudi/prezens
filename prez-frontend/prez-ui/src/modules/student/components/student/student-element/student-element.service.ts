import {Injectable} from '@angular/core';
import {Student} from "../../../../core/domain/student/student.model";
import {StudentElement} from "./student-element.model";

@Injectable({
    providedIn: 'root'
})
export class StudentElementService {

    constructor() { }

    public mapStudentElement(student: Student): StudentElement{
        return {
            uid: student.uid,
            class_uid: student.class_uid,
            first_name: student.first_name,
            last_name: student.last_name,
            student_id: student.student_id
        }
    }

    public mapStudentElements(students: Student[]): StudentElement[]{
        if (!students) return [];
        return students.map(student => this.mapStudentElement(student));
    }
}
