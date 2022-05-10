import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LessonDetailComponent} from "./lesson-detail.component";


@NgModule({
    declarations: [
        LessonDetailComponent
    ],
    exports: [
        LessonDetailComponent
    ],
    imports: [
        CommonModule
    ]
})
export class LessonDetailModule { }
