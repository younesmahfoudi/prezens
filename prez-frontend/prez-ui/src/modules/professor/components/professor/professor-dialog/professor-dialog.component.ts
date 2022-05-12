import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {RegisterElement} from "../../../../register/components/register-element/register-element.model";
import {Status} from "../../../../core/domain/register/status.enum";
import {RegisteredStudentUpdate} from "../../../../core/domain/register/register.model";
import {RegisterService} from "../../../../core/domain/register/register.service";
import {LessonElement} from "../../../../lesson/components/lesson-element/lesson-element.model";


@Component({
    selector: 'prez-professor-dialog',
    templateUrl: './professor-dialog.component.html',
    styleUrls: ['./professor-dialog.component.scss']
})
export class ProfessorDialogComponent implements OnInit {

    constructor(
        public dialogRef: MatDialogRef<ProfessorDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: {
            lessonElement: LessonElement
        },
        private registerService: RegisterService
    ) {
    }

    private registeredStudentUpdate: RegisteredStudentUpdate = {};
    public submitLoading: boolean = false;
    public submitDone: boolean = false;
    public hideSubmit: boolean = true;


    ngOnInit(): void {
        console.log(this.data)
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    emitRegister(lessonElement: LessonElement): void {
        this.registerEmitter.emit(lessonElement);
    }

    getStatusColor(status: Status): string {
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


}


