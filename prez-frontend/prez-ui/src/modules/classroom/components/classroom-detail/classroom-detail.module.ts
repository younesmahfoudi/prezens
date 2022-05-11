import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClassroomDetailComponent} from "./classroom-detail.component";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
    declarations: [
        ClassroomDetailComponent
    ],
    exports: [
        ClassroomDetailComponent
    ],
    imports: [
        CommonModule,
        MatIconModule
    ]
})
export class ClassroomDetailModule { }
