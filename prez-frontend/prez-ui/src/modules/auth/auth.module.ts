import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthComponent} from './auth.component';
import {SigninFormModule} from "./components/signin/signin-form/signin-form.module";
import {AuthLogoModule} from "./components/common/auth-logo/auth-logo.module";
import {HttpClientModule} from "@angular/common/http";
import {SigninScreenModule} from "./components/signin/signin-screen/signin-screen.module";
import {SignupScreenModule} from "./components/signup-screen/signup-screen.module";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
    declarations: [
        AuthComponent
    ],
    exports: [
        AuthComponent
    ],
    imports: [
        CommonModule,
        SigninFormModule,
        AuthLogoModule,
        HttpClientModule,
        SigninScreenModule,
        SignupScreenModule,
        MatButtonModule
    ]
})
export class AuthModule { }
