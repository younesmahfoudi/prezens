import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminProvideProfessorComponent} from "./admin-provide-professor.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";


@NgModule({
    declarations: [
        AdminProvideProfessorComponent
    ],
    exports: [
        AdminProvideProfessorComponent
    ],
    imports: [
        CommonModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        MatInputModule
    ]
})
export class AdminProvideProfessorModule { }
