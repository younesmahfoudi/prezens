import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignupScreenComponent} from "./signup-screen.component";
import {MatStepperModule} from "@angular/material/stepper";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {AuthLogoModule} from "../common/auth-logo/auth-logo.module";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
    declarations: [
        SignupScreenComponent
    ],
    exports: [
        SignupScreenComponent
    ],
    imports: [
        CommonModule,
        MatStepperModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        AuthLogoModule,
        MatIconModule
    ]
})
export class SignupScreenModule { }
