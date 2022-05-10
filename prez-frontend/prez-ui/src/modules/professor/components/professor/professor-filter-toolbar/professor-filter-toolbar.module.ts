import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfessorFilterToolbarComponent} from './professor-filter-toolbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {ClassroomSelectModule} from "../../../../classroom/components/classroom-select/classroom-select.module";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {ProfessorSelectModule} from "../professor-select/professor-select.module";


@NgModule({
    declarations: [
        ProfessorFilterToolbarComponent
    ],
    exports:[
        ProfessorFilterToolbarComponent
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
export class ProfessorFilterToolbarModule {
}
