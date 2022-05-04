import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClassroomSelectComponent} from "./classroom-select.component";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        ClassroomSelectComponent
    ],
    exports: [
        ClassroomSelectComponent
    ],
    imports: [
        CommonModule,
        MatSelectModule,
        FormsModule
    ]
})
export class ClassroomSelectModule { }
