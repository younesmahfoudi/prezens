import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentDetailComponent} from "./student-detail.component";


@NgModule({
    declarations: [
        StudentDetailComponent
    ],
    exports: [
        StudentDetailComponent
    ],
    imports: [
        CommonModule
    ]
})
export class StudentDetailModule { }
