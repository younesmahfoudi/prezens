import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminLessonToolbarComponent} from "./admin-lesson-toolbar.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {ClassroomSelectModule} from "../../../../../classroom/components/classroom-select/classroom-select.module";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {
    ProfessorSelectModule
} from "../../../../../professor/components/professor/professor-select/professor-select.module";


@NgModule({
    declarations: [
        AdminLessonToolbarComponent
    ],
    exports: [
        AdminLessonToolbarComponent
    ],
    imports: [
        CommonModule,
        MatToolbarModule,
        ClassroomSelectModule,
        MatIconModule,
        MatFormFieldModule,
        MatOptionModule,
        MatSelectModule,
        ProfessorSelectModule
    ]
})
export class AdminLessonToolbarModule { }
