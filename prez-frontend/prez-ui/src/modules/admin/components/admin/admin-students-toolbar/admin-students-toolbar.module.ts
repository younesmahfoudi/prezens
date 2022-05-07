import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminStudentsToolbarComponent} from "./admin-students-toolbar.component";
import {ClassroomSelectModule} from "../../../../classroom/components/classroom-select/classroom-select.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {AdminAddClassroomModule} from "../admin-add-classroom/admin-add-classroom.module";
import {AdminAddStudentModule} from "../admin-add-student/admin-add-student.module";
import {AdminClassroomScheduleModule} from "../admin-classroom-schedule/admin-classroom-schedule.module";


@NgModule({
    declarations: [
        AdminStudentsToolbarComponent
    ],
    exports: [
        AdminStudentsToolbarComponent
    ],
    imports: [
        CommonModule,
        ClassroomSelectModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        AdminAddClassroomModule,
        AdminAddStudentModule,
        AdminClassroomScheduleModule
    ]
})
export class AdminStudentsToolbarModule { }
