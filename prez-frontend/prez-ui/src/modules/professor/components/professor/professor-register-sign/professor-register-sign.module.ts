import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfessorRegisterSignComponent} from "./professor-register-sign.component";
import {SignaturePadModule} from "angular2-signaturepad";
import {ProfessorLogoModule} from "../professor-logo/professor-logo.module";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
    declarations: [
        ProfessorRegisterSignComponent,
    ],
    exports: [
        ProfessorRegisterSignComponent
    ],
    imports: [
        CommonModule,
        SignaturePadModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatButtonModule,
    ]
})
export class ProfessorRegisterSignModule {
}
