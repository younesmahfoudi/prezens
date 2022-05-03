import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentLogoComponent} from "./student-logo.component";


@NgModule({
    declarations: [
        StudentLogoComponent
    ],
    exports: [
        StudentLogoComponent
    ],
    imports: [
        CommonModule
    ]
})
export class StudentLogoModule { }
