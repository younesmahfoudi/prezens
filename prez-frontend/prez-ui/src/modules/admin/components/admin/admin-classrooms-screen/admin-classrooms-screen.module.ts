import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminClassroomsScreenComponent} from "./admin-classrooms-screen.component";
import {ClassroomListModule} from "../../../../classroom/components/classroom-list/classroom-list.module";
import {LessonTimelineModule} from "../../../../lesson/components/lesson-timeline/lesson-timeline.module";
import {StudentGridModule} from "../../../../student/components/student/student-grid/student-grid.module";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {AdminStudentsToolbarModule} from "../admin-students-toolbar/admin-students-toolbar.module";
import {AdminManageStudentModule} from "../admin-manage-student/admin-manage-student.module";


@NgModule({
    declarations: [
        AdminClassroomsScreenComponent
    ],
    exports: [
        AdminClassroomsScreenComponent
    ],
    imports: [
        CommonModule,
        ClassroomListModule,
        LessonTimelineModule,
        StudentGridModule,
        MatPaginatorModule,
        MatProgressSpinnerModule,
        AdminStudentsToolbarModule,
        AdminManageStudentModule
    ]
})
export class AdminClassroomsScreenModule { }
