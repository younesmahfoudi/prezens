import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessorLessonScreenComponent } from './professor-lesson-screen.component';
import { LessonTimelineModule } from 'src/modules/lesson/components/lesson-timeline/lesson-timeline.module';
import {ProfessorFilterToolbarModule} from "../professor-filter-toolbar/professor-filter-toolbar.module";



@NgModule({
  declarations: [
    ProfessorLessonScreenComponent
],
exports: [
    ProfessorLessonScreenComponent
],
    imports: [
        CommonModule,
        LessonTimelineModule,
        ProfessorFilterToolbarModule
    ]
})
export class ProfessorLessonScreenModule { }
