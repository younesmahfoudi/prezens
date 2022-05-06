import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminProvideStudentComponent} from "./admin-provide-student.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
    declarations: [
        AdminProvideStudentComponent
    ],
    exports: [
        AdminProvideStudentComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatProgressSpinnerModule
    ]
})
export class AdminProvideStudentModule { }
