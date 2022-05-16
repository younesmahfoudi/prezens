import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminDeleteStudentComponent} from "./admin-delete-student.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
    declarations: [
        AdminDeleteStudentComponent
    ],
    imports: [
        CommonModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatButtonModule
    ]
})
export class AdminDeleteStudentModule { }
