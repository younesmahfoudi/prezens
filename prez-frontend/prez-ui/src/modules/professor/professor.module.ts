import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfessorComponent} from './professor.component';
import {ProfessorScreenModule} from './components/professor/professor-screen/professor-screen.module';


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
    ]
})
export class ProfessorModule { }
