import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfessorComponent} from './professor.component';
import {ProfessorScreenModule} from './components/professor/professor-screen/professor-screen.module';
import {LessonDetailModule} from "../lesson/components/lesson-detail/lesson-detail.module";
import {RegisterDetailModule} from "../register/components/register-detail/register-detail.module";


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
export class ProfessorModule { }
