import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentPresenceComponent} from "./student-presence.component";
import {MatDividerModule} from "@angular/material/divider";
import {LessonDetailModule} from "../../../../lesson/components/lesson-detail/lesson-detail.module";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";


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
        LessonDetailModule,
        MatIconModule,
        MatDialogModule,
        MatButtonModule
    ]
})
export class StudentPresenceModule { }
