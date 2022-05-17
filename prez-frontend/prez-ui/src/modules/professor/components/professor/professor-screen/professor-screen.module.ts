<<<<<<< HEAD
import {ProfessorScreenComponent} from './professor-screen.component';
=======
import { ProfessorScreenComponent } from './professor-screen.component';
>>>>>>> 82f7875 (professor screen)
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatTabsModule} from "@angular/material/tabs";
// import {StudentLogoModule} from "../student-logo/student-logo.module";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
// import {StudentLessonScreenModule} from "../student-lesson-screen/student-lesson-screen.module";
// import {StudentHistoryScreenModule} from "../student-history-screen/student-history-screen.module";
// import {StudentNotificationScreenModule} from "../student-notification-screen/student-notification-screen.module";
<<<<<<< HEAD
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
    ]
=======
import { ProfessorLogoModule } from '../professor-logo/professor-logo.module';
import { ProfessorLessonScreenModule } from '../professor-lesson-screen/professor-lesson-screen.module';



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
    ProfessorLessonScreenModule
  ]
>>>>>>> 82f7875 (professor screen)
})
export class ProfessorScreenModule {
}
