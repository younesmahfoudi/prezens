import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminProfessorScreenComponent} from "./admin-professor-screen.component";
import {ProfessorGridModule} from "../../../../../professor/components/professor/professor-grid/professor-grid.module";
import {AdminProfessorToolbarModule} from "../admin-professor-toolbar/admin-professor-toolbar.module";
import {AdminProfessorScheduleModule} from "../admin-professor-schedule/admin-professor-schedule.module";


@NgModule({
    declarations: [
        AdminProfessorScreenComponent
    ],
    exports: [
        AdminProfessorScreenComponent
    ],
    imports: [
        CommonModule,
        ProfessorGridModule,
        AdminProfessorToolbarModule,
        AdminProfessorScheduleModule
    ]
})
export class AdminProfessorScreenModule { }
