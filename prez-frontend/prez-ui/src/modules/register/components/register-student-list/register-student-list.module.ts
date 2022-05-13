import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegisterStudentListComponent} from "./register-student-list.component";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";


@NgModule({
    declarations: [
        RegisterStudentListComponent
    ],
    exports: [
        RegisterStudentListComponent
    ],
    imports: [
        CommonModule,
        MatListModule,
        MatCardModule
    ]
})
export class RegisterStudentListModule { }
