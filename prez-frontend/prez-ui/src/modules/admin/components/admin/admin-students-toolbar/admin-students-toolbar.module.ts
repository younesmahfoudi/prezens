import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminStudentsToolbarComponent} from "./admin-students-toolbar.component";
import {ClassroomSelectModule} from "../../../../classroom/components/classroom-select/classroom-select.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
    declarations: [
        AdminStudentsToolbarComponent
    ],
    exports: [
        AdminStudentsToolbarComponent
    ],
    imports: [
        CommonModule,
        ClassroomSelectModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule
    ]
})
export class AdminStudentsToolbarModule { }
