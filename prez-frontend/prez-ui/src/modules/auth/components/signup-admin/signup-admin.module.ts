import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignupAdminComponent} from "./signup-admin.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatStepperModule} from "@angular/material/stepper";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {AuthLogoModule} from "../common/auth-logo/auth-logo.module";


@NgModule({
    declarations: [
        SignupAdminComponent
    ],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatStepperModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        AuthLogoModule
    ]
})
export class SignupAdminModule { }
