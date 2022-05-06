import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminProfessorScheduleComponent} from "./admin-professor-schedule.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {LessonTimelineModule} from "../../../../../lesson/components/lesson-timeline/lesson-timeline.module";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
    declarations: [
        AdminProfessorScheduleComponent
    ],
    imports: [
        CommonModule,
        MatDialogModule,
        MatIconModule,
        LessonTimelineModule,
        MatButtonModule
    ]
})
export class AdminProfessorScheduleModule { }
