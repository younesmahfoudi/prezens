import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfessorDialogComponent} from "./professor-dialog.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {RegisterDetailModule} from "../../../../register/components/register-detail/register-detail.module";
import {LessonDetailModule} from "../../../../lesson/components/lesson-detail/lesson-detail.module";
import {ProfessorRegisterSignModule} from "../professor-register-sign/professor-register-sign.module";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
    declarations: [
        ProfessorDialogComponent
    ],
    exports: [
        ProfessorDialogComponent
    ],
    imports: [
        CommonModule,
        MatDialogModule,
        MatCardModule,
        MatButtonModule,
        RegisterDetailModule,
        LessonDetailModule,
        ProfessorRegisterSignModule,
        MatIconModule
    ]
})
export class ProfessorDialogModule {
}
