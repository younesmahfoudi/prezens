import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfessorComponent} from './professor.component';
import {ProfessorScreenModule} from './components/professor/professor-screen/professor-screen.module';
import { ProfessorRegisterScreenComponent } from './components/professor/professor-register-screen/professor-register-screen.component';


@NgModule({
    declarations: [
        ProfessorComponent,
        ProfessorRegisterScreenComponent,
    ],
    exports: [
        ProfessorRegisterScreenComponent
    ],
    imports: [
        CommonModule,
        ProfessorScreenModule
    ]
})
export class ProfessorModule { }
