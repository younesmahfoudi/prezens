import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LessonComponent} from './lesson.component';
import {LessonTimelineModule} from "./components/lesson-timeline/lesson-timeline.module";
import { LessonDetailComponent } from './components/lesson-detail/lesson-detail.component';
import {LessonDetailModule} from "./components/lesson-detail/lesson-detail.module";


@NgModule({
    declarations: [
        LessonComponent
    ],
    imports: [
        CommonModule,
        LessonTimelineModule,
        LessonDetailModule
    ]
})
export class LessonModule { }
