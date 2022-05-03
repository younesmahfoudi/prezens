import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SigninScreenComponent} from "./signin-screen.component";
import {SigninFormModule} from "../signin-form/signin-form.module";
import {AuthLogoModule} from "../../common/auth-logo/auth-logo.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
    declarations: [
        SigninScreenComponent
    ],
    exports: [
        SigninScreenComponent
    ],
    imports: [
        CommonModule,
        SigninFormModule,
        AuthLogoModule,
        MatFormFieldModule,
        MatProgressSpinnerModule
    ]
})
export class SigninScreenModule { }
