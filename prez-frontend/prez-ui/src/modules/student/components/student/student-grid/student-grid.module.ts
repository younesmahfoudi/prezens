import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentGridComponent} from "./student-grid.component";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
    declarations: [
        StudentGridComponent
    ],
    exports: [
        StudentGridComponent
    ],
    imports: [
        CommonModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule
    ]
})
export class StudentGridModule { }
