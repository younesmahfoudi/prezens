import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminProfessorToolbarComponent} from "./admin-professor-toolbar.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {ClassroomSelectModule} from "../../../../../classroom/components/classroom-select/classroom-select.module";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {AdminClassroomScheduleModule} from "../../admin-classroom-schedule/admin-classroom-schedule.module";
import {AdminAddProfessorModule} from "../admin-add-professor/admin-add-professor.module";


@NgModule({
    declarations: [
        AdminProfessorToolbarComponent
    ],
    exports: [
        AdminProfessorToolbarComponent
    ],
    imports: [
        CommonModule,
        MatToolbarModule,
        ClassroomSelectModule,
        MatIconModule,
        MatButtonModule,
        AdminClassroomScheduleModule,
        AdminAddProfessorModule
    ]
})
export class AdminProfessorToolbarModule { }
