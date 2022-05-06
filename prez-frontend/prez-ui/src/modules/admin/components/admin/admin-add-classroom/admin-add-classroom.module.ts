import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminAddClassroomComponent} from "./admin-add-classroom.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {ClassroomAddModule} from "../../../../classroom/components/classroom-add/classroom-add.module";


@NgModule({
    declarations: [
        AdminAddClassroomComponent
    ],
    imports: [
        CommonModule,
        MatDialogModule,
        MatIconModule,
        MatButtonModule,
        ClassroomAddModule
    ]
})
export class AdminAddClassroomModule { }
