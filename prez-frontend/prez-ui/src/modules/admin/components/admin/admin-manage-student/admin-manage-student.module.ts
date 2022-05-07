import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminManageStudentComponent} from "./admin-manage-student.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {StudentDetailModule} from "../../../../student/components/student/student-detail/student-detail.module";
import {ClassroomSelectModule} from "../../../../classroom/components/classroom-select/classroom-select.module";
import {MatDividerModule} from "@angular/material/divider";


@NgModule({
    declarations: [
        AdminManageStudentComponent
    ],
    imports: [
        CommonModule,
        MatDialogModule,
        MatButtonModule,
        MatIconModule,
        StudentDetailModule,
        ClassroomSelectModule,
        MatDividerModule
    ]
})
export class AdminManageStudentModule { }
