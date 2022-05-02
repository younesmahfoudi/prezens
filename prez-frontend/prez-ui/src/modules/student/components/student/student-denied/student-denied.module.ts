import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentDeniedComponent} from "./student-denied.component";
import {MatDividerModule} from "@angular/material/divider";
import {LessonDetailModule} from "../../../../lesson/components/lesson-detail/lesson-detail.module";
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
    declarations: [
        StudentDeniedComponent
    ],
    exports: [
        StudentDeniedComponent
    ],
    imports: [
        CommonModule,
        MatDividerModule,
        LessonDetailModule,
        MatDialogModule,
        MatIconModule,
        MatButtonModule
    ]
})
export class StudentDeniedModule { }
