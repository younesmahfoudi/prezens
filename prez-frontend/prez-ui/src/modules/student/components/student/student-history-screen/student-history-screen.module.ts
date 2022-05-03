import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentHistoryScreenComponent} from "./student-history-screen.component";
import {StudentHistoryListModule} from "../student-history-list/student-history-list.module";


@NgModule({
    declarations: [
        StudentHistoryScreenComponent
    ],
    exports: [
        StudentHistoryScreenComponent
    ],
    imports: [
        CommonModule,
        StudentHistoryListModule
    ]
})
export class StudentHistoryScreenModule { }
