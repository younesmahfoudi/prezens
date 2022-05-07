import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminLessonScreenComponent} from "./admin-lesson-screen.component";
import {AdminLessonToolbarModule} from "../admin-lesson-toolbar/admin-lesson-toolbar.module";
import {LessonTimelineModule} from "../../../../../lesson/components/lesson-timeline/lesson-timeline.module";


@NgModule({
    declarations: [
        AdminLessonScreenComponent
    ],
    exports: [
        AdminLessonScreenComponent
    ],
    imports: [
        CommonModule,
        AdminLessonToolbarModule,
        LessonTimelineModule
    ]
})
export class AdminLessonScreenModule { }
