import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentAbsenceComponent} from "./student-absence.component";
import {MatDividerModule} from "@angular/material/divider";
import {LessonDetailModule} from "../../../../lesson/components/lesson-detail/lesson-detail.module";
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {StudentProofUploaderModule} from "../student-proof-uploader/student-proof-uploader.module";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
    declarations: [
        StudentAbsenceComponent
    ],
    exports: [
        StudentAbsenceComponent
    ],
    imports: [
        CommonModule,
        MatDividerModule,
        LessonDetailModule,
        MatDialogModule,
        MatIconModule,
        MatButtonModule,
        StudentProofUploaderModule,
        MatProgressSpinnerModule
    ]
})
export class StudentAbsenceModule { }
