import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentPresenceComponent} from "./student-presence.component";
import {MatDividerModule} from "@angular/material/divider";
import {LessonDetailModule} from "../../../../lesson/components/lesson-detail/lesson-detail.module";


@NgModule({
    declarations: [
        StudentPresenceComponent
    ],
    exports: [
        StudentPresenceComponent
    ],
    imports: [
        CommonModule,
        MatDividerModule,
        LessonDetailModule
    ]
})
export class StudentPresenceModule { }
