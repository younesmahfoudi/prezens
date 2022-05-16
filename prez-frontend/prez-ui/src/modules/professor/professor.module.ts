import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfessorComponent} from './professor.component';
import {ProfessorScreenModule} from './components/professor/professor-screen/professor-screen.module';
import { ProfessorRegisterScreenComponent } from './components/professor/professor-register-screen/professor-register-screen.component';
import { ProfessorRegisterSignComponent } from './components/professor/professor-register-sign/professor-register-sign.component';


@NgModule({
    declarations: [
        ProfessorComponent,
    ],
    exports: [
        ProfessorComponent
    ],
    imports: [
        CommonModule,
        ProfessorScreenModule
    ]
})
export class ProfessorModule {
}
