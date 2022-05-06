import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminComponent} from './admin.component';
import {AdminScreenModule} from "./components/admin/admin-screen/admin-screen.module";
import { AdminClassroomScheduleComponent } from './components/admin/admin-classroom-schedule/admin-classroom-schedule.component';


@NgModule({
    declarations: [
        AdminComponent
    ],
    imports: [
        CommonModule,
        AdminScreenModule
    ]
})
export class AdminModule { }
