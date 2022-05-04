import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminScreenComponent} from "./admin-screen.component";
import {MatTabsModule} from "@angular/material/tabs";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {AdminLogoComponent} from "../admin-logo/admin-logo.component";
import {AdminClassroomsScreenModule} from "../admin-classrooms-screen/admin-classrooms-screen.module";


@NgModule({
    declarations: [
        AdminScreenComponent,
        AdminLogoComponent
    ],
    exports: [
        AdminScreenComponent
    ],
    imports: [
        CommonModule,
        MatTabsModule,
        MatIconModule,
        MatButtonModule,
        AdminClassroomsScreenModule
    ]
})
export class AdminScreenModule { }
