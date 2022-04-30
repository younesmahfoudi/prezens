import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LessonComponent} from './lesson.component';
import {LessonTimelineModule} from "./components/lesson-timeline/lesson-timeline.module";


@NgModule({
    declarations: [
        LessonComponent
    ],
    imports: [
        CommonModule,
        LessonTimelineModule
    ]
})
export class LessonModule { }
