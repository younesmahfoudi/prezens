import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LessonTimelineComponent} from "./lesson-timeline.component";
import {TimelineModule} from "primeng/timeline";
import {ScheduleModule} from "@syncfusion/ej2-angular-schedule";


@NgModule({
    declarations: [
        LessonTimelineComponent
    ],
    exports: [
        LessonTimelineComponent
    ],
    imports: [
        CommonModule,
        TimelineModule,
        ScheduleModule
    ]
})
export class LessonTimelineModule { }
