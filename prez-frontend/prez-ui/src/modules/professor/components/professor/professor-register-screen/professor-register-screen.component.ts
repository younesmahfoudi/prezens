import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProfessorElement} from "../professor-element/professor-element.model";
import {LessonElement} from "../../../../lesson/components/lesson-element/lesson-element.model";
import {Lesson} from "../../../../core/domain/lesson/lesson.model";
import {
    RegisteredStudentElement,
    RegisterElement
} from "../../../../register/components/register-element/register-element.model";
import {Status} from "../../../../core/domain/register/status.enum";
import {RegisteredStudentUpdate} from "../../../../core/domain/register/register.model";
import {RegisterService} from "../../../../core/domain/register/register.service";

@Component({
    selector: 'prez-professor-register-screen',
    templateUrl: './professor-register-screen.component.html',
    styleUrls: ['./professor-register-screen.component.scss']
})
export class ProfessorRegisterScreenComponent implements OnInit {

    constructor(
        private registerService: RegisterService
    ) {
    }

    @Input() professorElement?: ProfessorElement;
    // @Input() classroomElement?: ClassroomElement;
    public lessonElements?: LessonElement[];
    private lessonData?: Lesson[];
    @Output() registerEmitter = new EventEmitter<RegisterElement>();
    private registerElement?: RegisterElement;
    private registeredStudentUpdate: RegisteredStudentUpdate = {};
    public submitLoading: boolean = false;
    public submitDone: boolean = false;
    public hideSubmit: boolean = true;

    ngOnInit(): void {
    }

    /**public updateRegisteredStudent(registeredStudentElement: RegisteredStudentElement) {
        if (!registeredStudentElement) return;
        if (registeredStudentElement.status == Status.Present) {
            this.registeredStudentUpdate.status = Status.Absent;
            this.registerService.updateRegisteredStudent(registeredStudentElement.uid, this.registeredStudentUpdate).subscribe(
                () => {
                    this.submitLoading = false;
                    this.submitDone = true
                },
                error => {
                    console.warn(error);
                    this.submitLoading = false;
                }
            )
        } else if (registeredStudentElement.status == Status.Absent) {
            this.registeredStudentUpdate.status = Status.Present;
            this.registerService.updateRegisteredStudent(registeredStudentElement.uid, this.registeredStudentUpdate).subscribe(
                () => {
                    this.submitLoading = false;
                    this.submitDone = true
                },
                error => {
                    console.warn(error);
                    this.submitLoading = false;
                }
            )
        }
    }**/
}
