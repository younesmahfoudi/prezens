import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentJustifiedComponent} from "./student-justified.component";


@NgModule({
    declarations: [
        StudentJustifiedComponent
    ],
    exports: [
        StudentJustifiedComponent
    ],
    imports: [
        CommonModule
    ]
})
export class StudentJustifiedModule { }
