import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminAddProfessorComponent} from "./admin-add-professor.component";
import {MatIconModule} from "@angular/material/icon";
import {MatDialogModule} from "@angular/material/dialog";
import {AdminProvideProfessorModule} from "../admin-provide-professor/admin-provide-professor.module";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
    declarations: [
        AdminAddProfessorComponent
    ],
    imports: [
        CommonModule,
        MatIconModule,
        MatDialogModule,
        AdminProvideProfessorModule,
        MatButtonModule
    ]
})
export class AdminAddProfessorModule { }
