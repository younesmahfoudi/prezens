import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentListComponent} from "./student-list.component";
import {MatListModule} from "@angular/material/list";


@NgModule({
    declarations: [
        StudentListComponent
    ],
    exports: [
        StudentListComponent
    ],
    imports: [
        CommonModule,
        MatListModule
    ]
})
export class StudentListModule { }
