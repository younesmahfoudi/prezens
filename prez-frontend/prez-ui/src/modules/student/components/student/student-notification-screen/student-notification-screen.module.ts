import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StudentNotificationScreenComponent} from "./student-notification-screen.component";
import {StudentHistoryListModule} from "../student-history-list/student-history-list.module";



@NgModule({
    declarations: [
        StudentNotificationScreenComponent
    ],
    exports: [
        StudentNotificationScreenComponent
    ],
    imports: [
        CommonModule,
        StudentHistoryListModule
    ]
})
export class StudentNotificationScreenModule { }
