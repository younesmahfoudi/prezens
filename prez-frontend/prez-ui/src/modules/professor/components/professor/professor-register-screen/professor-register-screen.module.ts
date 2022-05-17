import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfessorRegisterScreenComponent} from "./professor-register-screen.component";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {RegisterDetailModule} from "../../../../register/components/register-detail/register-detail.module";
import {ProfessorRegisterSignModule} from "../professor-register-sign/professor-register-sign.module";
import {LessonDetailModule} from "../../../../lesson/components/lesson-detail/lesson-detail.module";


@NgModule({
    declarations: [
        ProfessorRegisterScreenComponent],
    exports: [
        ProfessorRegisterScreenComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule
    ]
})
export class ProfessorRegisterScreenModule {
}
