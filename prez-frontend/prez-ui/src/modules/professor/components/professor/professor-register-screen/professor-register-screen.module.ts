import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfessorRegisterScreenComponent} from "./professor-register-screen.component";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";


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
