import {Component, Input, OnInit} from '@angular/core';
import {ClassroomElement} from "../../../../classroom/components/classroom-element/classroom-element.model";
import {RegisteredStudentElement} from "../../../../register/components/register-element/register-element.model";
import {LessonElement} from "../../../../lesson/components/lesson-element/lesson-element.model";

@Component({
    selector: 'prez-student-presence',
    templateUrl: './student-presence.component.html',
    styleUrls: ['./student-presence.component.scss']
})
export class StudentPresenceComponent implements OnInit {

    @Input() classroomElement: ClassroomElement;
    @Input() registeredStudentElement: RegisteredStudentElement;
    @Input() lessonElement: LessonElement;

    constructor() { }

    ngOnInit(): void {
    }

}
