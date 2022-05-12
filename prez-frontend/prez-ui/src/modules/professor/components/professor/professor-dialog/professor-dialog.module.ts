import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfessorDialogComponent} from "./professor-dialog.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
    declarations: [
        ProfessorDialogComponent
    ],
    exports: [
        ProfessorDialogComponent
    ],
    imports: [
        CommonModule,
        MatDialogModule,
        MatCardModule,
        MatButtonModule
    ]
})
export class ProfessorDialogModule {
}
