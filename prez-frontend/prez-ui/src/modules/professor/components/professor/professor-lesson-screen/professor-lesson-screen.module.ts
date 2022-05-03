import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessorLessonScreenComponent } from './professor-lesson-screen.component';
import { LessonTimelineModule } from 'src/modules/lesson/components/lesson-timeline/lesson-timeline.module';



@NgModule({
  declarations: [
    ProfessorLessonScreenComponent
],
exports: [
    ProfessorLessonScreenComponent
],
imports: [
    CommonModule,
    LessonTimelineModule
]
})
export class ProfessorLessonScreenModule { }
