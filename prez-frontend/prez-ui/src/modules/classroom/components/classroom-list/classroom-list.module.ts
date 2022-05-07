import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClassroomListComponent} from "./classroom-list.component";
import {MatListModule} from "@angular/material/list";


@NgModule({
    declarations: [
        ClassroomListComponent
    ],
    exports: [
        ClassroomListComponent
    ],
    imports: [
        CommonModule,
        MatListModule
    ]
})
export class ClassroomListModule { }
