import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentPendingComponent} from "./student-pending.component";


@NgModule({
    declarations: [
        StudentPendingComponent
    ],
    exports: [
        StudentPendingComponent
    ],
    imports: [
        CommonModule
    ]
})
export class StudentPendingModule { }
