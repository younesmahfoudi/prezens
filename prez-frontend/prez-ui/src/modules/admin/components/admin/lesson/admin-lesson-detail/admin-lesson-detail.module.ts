import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminLessonDetailComponent} from "./admin-lesson-detail.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {LessonDetailModule} from "../../../../../lesson/components/lesson-detail/lesson-detail.module";


@NgModule({
    declarations: [
        AdminLessonDetailComponent
    ],
    imports: [
        CommonModule,
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        MatDividerModule,
        LessonDetailModule
    ]
})
export class AdminLessonDetailModule { }
