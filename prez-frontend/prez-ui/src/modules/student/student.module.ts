import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentComponent} from './student.component';
import {StudentScreenModule} from "./components/student/student-screen/student-screen.module";

@NgModule({
    declarations: [
        StudentComponent
    ],
    imports: [
        CommonModule,
        StudentScreenModule
    ]
})
export class StudentModule { }
