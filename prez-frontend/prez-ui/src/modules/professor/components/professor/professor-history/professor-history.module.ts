import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessorHistoryComponent } from './professor-history.component';


@NgModule({
  declarations: [
    ProfessorHistoryComponent
  ],
  exports: [
    ProfessorHistoryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProfessorHistoryModule { }
