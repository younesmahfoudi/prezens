import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentScreenComponent} from "./student-screen.component";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatTabsModule} from "@angular/material/tabs";
import {StudentLogoModule} from "../student-logo/student-logo.module";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {StudentLessonScreenModule} from "../student-lesson-screen/student-lesson-screen.module";
import {StudentHistoryScreenModule} from "../student-history-screen/student-history-screen.module";

@NgModule({
    declarations: [
        StudentScreenComponent
    ],
    exports: [
        StudentScreenComponent
    ],
    imports: [
        CommonModule,
        MatSidenavModule,
        MatTabsModule,
        StudentLogoModule,
        MatIconModule,
        MatButtonModule,
        StudentLessonScreenModule,
        StudentHistoryScreenModule
    ]
})
export class StudentScreenModule { }
