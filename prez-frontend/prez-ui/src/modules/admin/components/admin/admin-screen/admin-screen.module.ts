import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminScreenComponent} from "./admin-screen.component";
import {MatTabsModule} from "@angular/material/tabs";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {AdminLogoComponent} from "../admin-logo/admin-logo.component";
import {AdminClassroomsScreenModule} from "../admin-classrooms-screen/admin-classrooms-screen.module";
import {AdminProfessorScreenModule} from "../professor/admin-professor-screen/admin-professor-screen.module";
import {AdminLessonScreenModule} from "../lesson/admin-lesson-screen/admin-lesson-screen.module";
import {
    AdminNotificationsScreenModule
} from "../notifications/admin-notifications-screen/admin-notifications-screen.module";


@NgModule({
    declarations: [
        AdminScreenComponent,
        AdminLogoComponent
    ],
    exports: [
        AdminScreenComponent
    ],
    imports: [
        CommonModule,
        MatTabsModule,
        MatIconModule,
        MatButtonModule,
        AdminClassroomsScreenModule,
        AdminProfessorScreenModule,
        AdminLessonScreenModule,
        AdminNotificationsScreenModule
    ]
})
export class AdminScreenModule { }
