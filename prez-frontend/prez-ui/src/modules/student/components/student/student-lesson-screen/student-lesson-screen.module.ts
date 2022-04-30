import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StudentLessonScreenComponent} from "./student-lesson-screen.component";
import {LessonTimelineModule} from "../../../../lesson/components/lesson-timeline/lesson-timeline.module";



@NgModule({
    declarations: [
        StudentLessonScreenComponent
    ],
    exports: [
        StudentLessonScreenComponent
    ],
    imports: [
        CommonModule,
        LessonTimelineModule
    ]
})
export class StudentLessonScreenModule {

}
