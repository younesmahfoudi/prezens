import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfessorGridComponent} from "./professor-grid.component";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import {ProfessorDeleteModule} from "../professor-delete/professor-delete.module";


@NgModule({
    declarations: [
        ProfessorGridComponent
    ],
    exports: [
        ProfessorGridComponent
    ],
    imports: [
        CommonModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        MatPaginatorModule,
        ProfessorDeleteModule
    ]
})
export class ProfessorGridModule { }
