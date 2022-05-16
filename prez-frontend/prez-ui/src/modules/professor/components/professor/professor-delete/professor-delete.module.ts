import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfessorDeleteComponent} from "./professor-delete.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
    declarations: [
        ProfessorDeleteComponent
    ],
    imports: [
        CommonModule,
        MatDialogModule,
        MatButtonModule,
        MatProgressSpinnerModule
    ]
})
export class ProfessorDeleteModule { }
