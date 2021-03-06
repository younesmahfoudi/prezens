import {ProfessorScreenComponent} from './professor-screen.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatTabsModule} from "@angular/material/tabs";
// import {StudentLogoModule} from "../student-logo/student-logo.module";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

import {ProfessorLogoModule} from '../professor-logo/professor-logo.module';
import {ProfessorLessonScreenModule} from '../professor-lesson-screen/professor-lesson-screen.module';
import {ProfessorHistoryModule} from '../professor-history/professor-history.module';
import {ProfessorRegisterScreenModule} from "../professor-register-screen/professor-register-screen.module";


@NgModule({
    declarations: [
        ProfessorScreenComponent
    ],
    exports: [
        ProfessorScreenComponent
    ],
    imports: [
        CommonModule,
        MatSidenavModule,
        MatTabsModule,
        ProfessorLogoModule,
        MatIconModule,
        MatButtonModule,
        ProfessorLessonScreenModule,
        ProfessorHistoryModule,
        ProfessorRegisterScreenModule
    ]})
export class ProfessorScreenModule {
}
