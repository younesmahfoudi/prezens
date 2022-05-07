import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminAddStudentComponent} from "./admin-add-student.component";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";
import {ClassroomAddModule} from "../../../../classroom/components/classroom-add/classroom-add.module";
import {MatButtonModule} from "@angular/material/button";
import {AdminProvideStudentModule} from "../admin-provide-student/admin-provide-student.module";


@NgModule({
    declarations: [
        AdminAddStudentComponent
    ],
    imports: [
        CommonModule,
        MatIconModule,
        MatDialogModule,
        ClassroomAddModule,
        MatButtonModule,
        AdminProvideStudentModule
    ]
})
export class AdminAddStudentModule { }
