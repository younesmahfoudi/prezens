import {Component, Inject, OnInit} from '@angular/core';
import {LessonElement} from "../../../../lesson/components/lesson-element/lesson-element.model";
import {RegisterService} from "../../../../core/domain/register/register.service";
import {Register, RegisteredStudent} from "../../../../core/domain/register/register.model";
import {Status} from "../../../../core/domain/register/status.enum";
import {ProfessorDialogComponent} from "../professor-dialog/professor-dialog.component";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {RegisterElement} from "../../../../register/components/register-element/register-element.model";
import {RegisterElementService} from "../../../../register/components/register-element/register-element.service";
import {LessonService} from "../../../../core/domain/lesson/lesson.service";
import {LessonElementService} from "../../../../lesson/components/lesson-element/lesson-element.service";
import {Router} from "@angular/router";

@Component({
    selector: 'prez-professor-register-dialog',
    templateUrl: './professor-register-dialog.component.html',
    styleUrls: ['./professor-register-dialog.component.scss']
})
export class ProfessorRegisterDialogComponent implements OnInit {

    public registerData: Register;
    public registerElement: RegisterElement;
    public lessonElement: LessonElement;
    public submitLoading: boolean = false;
    public submitMessage?: string;
    public errorMessage?: string;
    public currentDate: Date;

    constructor(
        public dialogRef: MatDialogRef<ProfessorDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: {
            lessonElement: LessonElement
        },
        private registerService: RegisterService,
        private registerElementService: RegisterElementService,
        private lessonService: LessonService,
        private lessonElementService: LessonElementService,
        private router: Router
    ) {
    }

    ngOnInit(): void {
        this.currentDate = new Date()
    }

    public compareDate(lessonDate: Date): boolean{
        return (this.currentDate > new Date(lessonDate))
    }

    public getStatusColor(status: Status): string {
        switch (status) {
            case Status.Present: {
                return "green";
            }
            case Status.Absent: {
                return "red";
            }
            default: {
                return "grey";
            }
        }
    }

    public changesStudentStatus(registeredStudent: RegisteredStudent) {
        if (registeredStudent.status == Status.Present) registeredStudent.status = Status.Absent;
        else if (registeredStudent.status == Status.Absent) registeredStudent.status = Status.Present;
        console.log(this.data.lessonElement)
    }

    public updateRegisteredStudentList(registeredStudent: RegisteredStudent[]): void {
        if(!registeredStudent) return;
        this.submitLoading = true;
        this.registerService.updateRegisteredStudentsList(registeredStudent, this.data.lessonElement.register.uid).subscribe(
            register => {
                this.submitLoading = false;
                this.submitMessage = "Submitted"
                this.errorMessage = undefined
                this.registerData = register
                this.registerElement = this.registerElementService.mapRegisterElement(this.registerData)
            },
            error => {
                this.errorMessage = error.error.detail
                this.submitMessage = undefined
                this.submitLoading = false;
            }
        );
    }

    public initData(): void{
        this.lessonService.getLesson(this.data.lessonElement.uid).subscribe(
            lesson => {
                this.data.lessonElement = this.lessonElementService.mapLessonElement(lesson);
                this.registerElement = this.data.lessonElement.register
            },
            error => {
                console.warn(error);
            })
    }

    public qrNavigate(): void {
        const url : string = `http://localhost:4200/registercode/%2F;idR=${this.data.lessonElement.register.uid}`
        window.open(url, "_blank");
    }
}
