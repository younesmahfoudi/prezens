import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthLogoComponent} from "./auth-logo.component";



@NgModule({
  declarations: [
    AuthLogoComponent
  ],
  exports: [
    AuthLogoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthLogoModule { }
