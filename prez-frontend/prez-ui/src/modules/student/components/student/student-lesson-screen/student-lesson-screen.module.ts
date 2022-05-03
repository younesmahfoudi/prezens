import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StudentLessonScreenComponent} from "./student-lesson-screen.component";
import {LessonTimelineModule} from "../../../../lesson/components/lesson-timeline/lesson-timeline.module";
import {ClassroomDetailModule} from "../../../../classroom/components/classroom-detail/classroom-detail.module";
import {TimelineModule} from "primeng/timeline";



@NgModule({
    declarations: [
        StudentLessonScreenComponent
    ],
    exports: [
        StudentLessonScreenComponent
    ],
    imports: [
        CommonModule,
        LessonTimelineModule,
        ClassroomDetailModule,
        TimelineModule
    ]
})
export class StudentLessonScreenModule {

}
