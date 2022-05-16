import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminLessonScreenComponent} from "./admin-lesson-screen.component";
import {AdminLessonToolbarModule} from "../admin-lesson-toolbar/admin-lesson-toolbar.module";
import {LessonTimelineModule} from "../../../../../lesson/components/lesson-timeline/lesson-timeline.module";
import {AdminLessonDetailModule} from "../admin-lesson-detail/admin-lesson-detail.module";
import {AdminLessonAddModule} from "../admin-lesson-add/admin-lesson-add.module";


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
        LessonTimelineModule,
        AdminLessonDetailModule,
        AdminLessonAddModule
    ]
})
export class AdminLessonScreenModule { }
