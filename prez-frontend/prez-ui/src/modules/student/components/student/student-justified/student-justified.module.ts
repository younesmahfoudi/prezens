import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentJustifiedComponent} from "./student-justified.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatDividerModule} from "@angular/material/divider";
import {LessonDetailModule} from "../../../../lesson/components/lesson-detail/lesson-detail.module";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
    declarations: [
        StudentJustifiedComponent
    ],
    exports: [
        StudentJustifiedComponent
    ],
    imports: [
        CommonModule,
        MatDialogModule,
        MatDividerModule,
        LessonDetailModule,
        MatIconModule,
        MatButtonModule
    ]
})
export class StudentJustifiedModule { }
