import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentDeniedComponent} from "./student-denied.component";


@NgModule({
    declarations: [
        StudentDeniedComponent
    ],
    exports: [
        StudentDeniedComponent
    ],
    imports: [
        CommonModule
    ]
})
export class StudentDeniedModule { }
