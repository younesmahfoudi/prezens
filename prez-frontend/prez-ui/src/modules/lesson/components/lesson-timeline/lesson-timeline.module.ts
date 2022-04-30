import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LessonTimelineComponent} from "./lesson-timeline.component";
import {TimelineModule} from "primeng/timeline";


@NgModule({
    declarations: [
        LessonTimelineComponent
    ],
    exports: [
        LessonTimelineComponent
    ],
    imports: [
        CommonModule,
        TimelineModule
    ]
})
export class LessonTimelineModule { }
