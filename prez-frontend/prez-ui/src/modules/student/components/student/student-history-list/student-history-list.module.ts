import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentHistoryListComponent} from "./student-history-list.component";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatDividerModule} from "@angular/material/divider";
import {MatDialogModule} from "@angular/material/dialog";
import {StudentHistoryDetailModule} from "../student-history-detail/student-history-detail.module";


@NgModule({
    declarations: [
        StudentHistoryListComponent
    ],
    exports: [
        StudentHistoryListComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatExpansionModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatDividerModule,
        MatDialogModule,
        StudentHistoryDetailModule
    ]
})
export class StudentHistoryListModule { }
