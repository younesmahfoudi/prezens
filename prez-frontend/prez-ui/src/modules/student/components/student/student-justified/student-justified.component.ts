import {Component, Input, OnInit} from '@angular/core';
import {ClassroomElement} from "../../../../classroom/components/classroom-element/classroom-element.model";
import {RegisteredStudentElement} from "../../../../register/components/register-element/register-element.model";
import {LessonElement} from "../../../../lesson/components/lesson-element/lesson-element.model";

@Component({
    selector: 'prez-student-justified',
    templateUrl: './student-justified.component.html',
    styleUrls: ['./student-justified.component.scss']
})
export class StudentJustifiedComponent implements OnInit {

    @Input() classroomElement: ClassroomElement;
    @Input() registeredStudentElement: RegisteredStudentElement;
    @Input() lessonElement: LessonElement;

    constructor() { }

    ngOnInit(): void {
    }

}
