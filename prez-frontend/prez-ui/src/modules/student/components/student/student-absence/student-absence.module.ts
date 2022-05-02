import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentAbsenceComponent} from "./student-absence.component";
import {MatDividerModule} from "@angular/material/divider";
import {LessonDetailModule} from "../../../../lesson/components/lesson-detail/lesson-detail.module";


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
        LessonDetailModule
    ]
})
export class StudentAbsenceModule { }
