import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfessorHistoryComponent} from './professor-history.component';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {ProfessorDialogModule} from "../professor-dialog/professor-dialog.module";


@NgModule({
    declarations: [
        ProfessorHistoryComponent
    ],
    exports: [
        ProfessorHistoryComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        ProfessorDialogModule
    ]
})
export class ProfessorHistoryModule {
}
