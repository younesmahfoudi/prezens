import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterDetailComponent} from "./register-detail.component";
import {RegisterStudentListModule} from "../register-student-list/register-student-list.module";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
    declarations: [
        RegisterDetailComponent
    ],
    exports: [
        RegisterDetailComponent
    ],
    imports: [
        CommonModule,
        RegisterStudentListModule,
        MatIconModule,
        MatButtonModule
    ]
})
export class RegisterDetailModule { }
