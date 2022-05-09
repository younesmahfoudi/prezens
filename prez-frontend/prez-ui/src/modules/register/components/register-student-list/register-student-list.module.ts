import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterStudentListComponent} from "./register-student-list.component";
import {MatListModule} from "@angular/material/list";


@NgModule({
    declarations: [
        RegisterStudentListComponent
    ],
    exports: [
        RegisterStudentListComponent
    ],
    imports: [
        CommonModule,
        MatListModule
    ]
})
export class RegisterStudentListModule { }
