import {Component, Input, OnInit} from '@angular/core';
import {ClassroomElement} from "../../../../classroom/components/classroom-element/classroom-element.model";
import {RegisteredStudentElement} from "../../../../register/components/register-element/register-element.model";
import {LessonElement} from "../../../../lesson/components/lesson-element/lesson-element.model";

@Component({
    selector: 'prez-student-denied',
    templateUrl: './student-denied.component.html',
    styleUrls: ['./student-denied.component.scss']
})
export class StudentDeniedComponent implements OnInit {

    @Input() classroomElement: ClassroomElement;
    @Input() registeredStudentElement: RegisteredStudentElement;
    @Input() lessonElement: LessonElement;

    constructor() { }

    ngOnInit(): void {
    }

}
