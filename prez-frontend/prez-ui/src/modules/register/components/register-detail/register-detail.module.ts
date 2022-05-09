import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterDetailComponent} from "./register-detail.component";
import {RegisterStudentListModule} from "../register-student-list/register-student-list.module";


@NgModule({
    declarations: [
        RegisterDetailComponent
    ],
    exports: [
        RegisterDetailComponent
    ],
    imports: [
        CommonModule,
        RegisterStudentListModule
    ]
})
export class RegisterDetailModule { }
