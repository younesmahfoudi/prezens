import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentRegisterComponent} from "./student-register.component";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatButtonModule} from "@angular/material/button";
import {SignaturePadModule} from "angular2-signaturepad";
import {StudentLogoModule} from "../student-logo/student-logo.module";


@NgModule({
    declarations: [
        StudentRegisterComponent
    ],
    imports: [
        CommonModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        SignaturePadModule,
        StudentLogoModule
    ]
})
export class StudentRegisterModule { }
