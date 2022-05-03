import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessorLogoComponent } from './professor-logo.component';



@NgModule({
  declarations: [
    ProfessorLogoComponent
  ],
  exports: [
    ProfessorLogoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProfessorLogoModule { }
