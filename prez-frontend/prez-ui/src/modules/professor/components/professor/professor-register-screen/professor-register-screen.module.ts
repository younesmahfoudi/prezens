import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfessorRegisterScreenComponent} from "./professor-register-screen.component";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {ProfessorRegisterDialogModule} from "../professor-register-dialog/professor-register-dialog.module";


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
        MatButtonModule,
        ProfessorRegisterDialogModule
    ]
})
export class ProfessorRegisterScreenModule {
}
