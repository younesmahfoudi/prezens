import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentPendingComponent} from "./student-pending.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {LessonDetailModule} from "../../../../lesson/components/lesson-detail/lesson-detail.module";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
    declarations: [
        StudentPendingComponent
    ],
    exports: [
        StudentPendingComponent
    ],
    imports: [
        CommonModule,
        MatDialogModule,
        MatIconModule,
        MatDividerModule,
        LessonDetailModule,
        MatButtonModule
    ]
})
export class StudentPendingModule { }
