import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentHistoryDetailComponent} from "./student-history-detail.component";
import {LessonDetailModule} from "../../../../lesson/components/lesson-detail/lesson-detail.module";
import {MatDividerModule} from "@angular/material/divider";
import {StudentAbsenceModule} from "../student-absence/student-absence.module";
import {StudentPresenceModule} from "../student-presence/student-presence.module";
import {StudentDeniedModule} from "../student-denied/student-denied.module";
import {StudentJustifiedModule} from "../student-justified/student-justified.module";
import {StudentPendingModule} from "../student-pending/student-pending.module";
import {ProgressBarModule} from "primeng/progressbar";


@NgModule({
    declarations: [
        StudentHistoryDetailComponent
    ],
    imports: [
        CommonModule,
        LessonDetailModule,
        MatDividerModule,
        StudentAbsenceModule,
        StudentPresenceModule,
        StudentDeniedModule,
        StudentJustifiedModule,
        StudentPendingModule,
        ProgressBarModule
    ],
    exports: [
        StudentHistoryDetailComponent
    ]
})
export class StudentHistoryDetailModule { }
