import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminComponent} from './admin.component';
import {AdminScreenModule} from "./components/admin/admin-screen/admin-screen.module";


@NgModule({
    declarations: [
        AdminComponent
    ],
    imports: [
        CommonModule,
        AdminScreenModule
    ]
})
export class AdminModule { }
