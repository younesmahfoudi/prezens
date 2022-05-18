import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfessorRegisterCodeComponent} from "./professor-register-code.component";
import {QRCodeModule} from "angularx-qrcode";



@NgModule({
  declarations: [
      ProfessorRegisterCodeComponent
  ],
    imports: [
        CommonModule,
        QRCodeModule
    ]
})
export class ProfessorRegisterCodeModule { }
