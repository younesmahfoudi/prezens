import {Component, Inject, OnInit} from '@angular/core';
import {LessonElement} from "../../../../lesson/components/lesson-element/lesson-element.model";
import {RegisterService} from "../../../../core/domain/register/register.service";
import {Register, RegisteredStudent, RegisteredStudentUpdate} from "../../../../core/domain/register/register.model";
import {Status} from "../../../../core/domain/register/status.enum";
import {ProfessorDialogComponent} from "../professor-dialog/professor-dialog.component";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {RegisterElement} from "../../../../register/components/register-element/register-element.model";
import {RegisterElementService} from "../../../../register/components/register-element/register-element.service";

@Component({
    selector: 'prez-professor-register-dialog',
    templateUrl: './professor-register-dialog.component.html',
    styleUrls: ['./professor-register-dialog.component.scss']
})
export class ProfessorRegisterDialogComponent implements OnInit {

    constructor(
        public dialogRef: MatDialogRef<ProfessorDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: {
            lessonElement: LessonElement
        },
        private registerService: RegisterService,
        private registerElementService: RegisterElementService,
    ) {
    }

    public registerData: Register;
    public registerElement: RegisterElement;
    public professorRegistry: boolean = true;
    public submitLoading: boolean = false;
    public submitMessage?: string;
    public errorMessage?: string;
    public currentDate: Date;

    ngOnInit(): void {
        console.log(this.data)
        this.currentDate = new Date()
        console.log(this.currentDate)
        console.log(this.data.lessonElement.start_at)
        console.log(new Date( this.data.lessonElement.start_at))
        console.log(this.data.lessonElement.start_at.valueOf() < this.currentDate.valueOf())


    }

    public compareDate(lessonDate: Date): boolean{
        return (this.currentDate > new Date(lessonDate))
    }

    public onNoClick(): void {
        this.dialogRef.close();
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
                this.submitMessage = "Register submitted successfully"
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
}
