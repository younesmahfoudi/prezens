import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessorComponent } from './professor.component';
import { ProfessorScreenModule } from './components/professor/professor-screen/professor-screen.module';
import { ProfessorLessonScreenComponent } from './components/professor/professor-lesson-screen/professor-lesson-screen.component';


@NgModule({
  declarations: [
    ProfessorComponent
  ],
  imports: [
    CommonModule,
    ProfessorScreenModule
  ]
})
export class ProfessorModule { }
