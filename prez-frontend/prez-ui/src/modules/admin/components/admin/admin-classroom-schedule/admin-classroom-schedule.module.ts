import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminClassroomScheduleComponent} from "./admin-classroom-schedule.component";
import {LessonTimelineModule} from "../../../../lesson/components/lesson-timeline/lesson-timeline.module";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
      AdminClassroomScheduleComponent
  ],
    imports: [
        CommonModule,
        LessonTimelineModule,
        MatIconModule,
        MatDialogModule,
        MatButtonModule
    ]
})
export class AdminClassroomScheduleModule { }
