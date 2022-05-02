import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentHistoryDetailComponent} from "./student-history-detail.component";
import {LessonDetailModule} from "../../../../lesson/components/lesson-detail/lesson-detail.module";
import {MatDividerModule} from "@angular/material/divider";


@NgModule({
    declarations: [
        StudentHistoryDetailComponent
    ],
    imports: [
        CommonModule,
        LessonDetailModule,
        MatDividerModule
    ],
    exports: [
        StudentHistoryDetailComponent
    ]
})
export class StudentHistoryDetailModule { }
