import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminNotificationsDetailComponent} from "./admin-notifications-detail.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {RegisterDetailModule} from "../../../../../register/components/register-detail/register-detail.module";
import {LessonDetailModule} from "../../../../../lesson/components/lesson-detail/lesson-detail.module";
import {MatDividerModule} from "@angular/material/divider";
import {StudentDetailModule} from "../../../../../student/components/student/student-detail/student-detail.module";
import {MatButtonModule} from "@angular/material/button";
import {BrowserModule} from "@angular/platform-browser";
import {ClassroomDetailModule} from "../../../../../classroom/components/classroom-detail/classroom-detail.module";


@NgModule({
    declarations: [
        AdminNotificationsDetailComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        MatDialogModule,
        MatIconModule,
        RegisterDetailModule,
        LessonDetailModule,
        MatDividerModule,
        StudentDetailModule,
        MatButtonModule,
        ClassroomDetailModule
    ]
})
export class AdminNotificationsDetailModule { }
