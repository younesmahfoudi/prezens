import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminComponent} from './admin.component';
import {AdminScreenModule} from "./components/admin/admin-screen/admin-screen.module";
import {MatDialogModule} from "@angular/material/dialog";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
    declarations: [
        AdminComponent
    ],
    imports: [
        CommonModule,
        AdminScreenModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatButtonModule
    ]
})
export class AdminModule { }
