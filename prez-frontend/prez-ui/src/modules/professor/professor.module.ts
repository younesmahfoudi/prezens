import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfessorComponent} from './professor.component';
import {ProfessorScreenModule} from './components/professor/professor-screen/professor-screen.module';
import { ProfessorRegisterScreenComponent } from './components/professor/professor-register-screen/professor-register-screen.component';
import { ProfessorRegisterSignComponent } from './components/professor/professor-register-sign/professor-register-sign.component';
import { ProfessorRegisterDialogComponent } from './components/professor/professor-register-dialog/professor-register-dialog.component';
import {LessonDetailModule} from "../lesson/components/lesson-detail/lesson-detail.module";
import {RegisterDetailModule} from "../register/components/register-detail/register-detail.module";
import {
    ProfessorRegisterSignModule
} from "./components/professor/professor-register-sign/professor-register-sign.module";
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
    declarations: [
        ProfessorComponent,
    ],
    exports: [
        ProfessorComponent
    ],
    imports: [
        CommonModule,
        ProfessorScreenModule,
        LessonDetailModule,
        RegisterDetailModule,
    ]
})
export class ProfessorModule {
}
