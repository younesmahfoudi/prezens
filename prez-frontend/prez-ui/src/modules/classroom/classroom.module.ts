import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClassroomComponent} from './classroom.component';
import { ClassroomAddComponent } from './components/classroom-add/classroom-add.component';


@NgModule({
    declarations: [
        ClassroomComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ClassroomModule { }
