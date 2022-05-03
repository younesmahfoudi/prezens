import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClassroomDetailComponent} from "./classroom-detail.component";


@NgModule({
    declarations: [
        ClassroomDetailComponent
    ],
    exports: [
        ClassroomDetailComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ClassroomDetailModule { }
