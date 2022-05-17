import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfessorRegisterDialogComponent} from "./professor-register-dialog.component";
import {LessonDetailModule} from "../../../../lesson/components/lesson-detail/lesson-detail.module";
import {RegisterDetailModule} from "../../../../register/components/register-detail/register-detail.module";
import {ProfessorRegisterSignModule} from "../professor-register-sign/professor-register-sign.module";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
      ProfessorRegisterDialogComponent
  ],
    exports: [
        ProfessorRegisterDialogComponent
    ],
    imports: [
        CommonModule,
        LessonDetailModule,
        RegisterDetailModule,
        ProfessorRegisterSignModule,
        MatDialogModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule
    ]
})
export class ProfessorRegisterDialogModule { }
