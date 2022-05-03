import {Injectable} from '@angular/core';
import {StudentElementService} from "../../../student/components/student/student-element/student-element.service";
import {Classroom} from "../../../core/domain/classroom/classroom.model";
import {ClassroomElement} from "./classroom-element.model";

@Injectable({
    providedIn: 'root'
})
export class ClassroomElementService {

    constructor(private studentElementService: StudentElementService) { }

    public mapClassroomElement(classroom: Classroom): ClassroomElement{
        return {
            uid: classroom.uid,
            description: classroom.description,
            students: this.studentElementService.mapStudentElements(classroom.students),
            promotion: classroom.promotion
        }
    }

    public mapClassroomElements(classrooms: Classroom[]): ClassroomElement[]{
        if (!classrooms) return [];
        return classrooms.map(classroom => this.mapClassroomElement(classroom));
    }
}
