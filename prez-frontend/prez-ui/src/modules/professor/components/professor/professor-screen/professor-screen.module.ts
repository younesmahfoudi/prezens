import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessorScreenComponent } from './professor-screen.component';



@NgModule({
  declarations: [
    ProfessorScreenComponent
  ],
  exports: [
    ProfessorScreenComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProfessorScreenModule { }
