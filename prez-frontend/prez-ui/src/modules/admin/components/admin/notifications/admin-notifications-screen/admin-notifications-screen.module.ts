import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminNotificationsScreenComponent} from "./admin-notifications-screen.component";
import {AdminNotificationsListModule} from "../admin-notifications-list/admin-notifications-list.module";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
    declarations: [
        AdminNotificationsScreenComponent
    ],
    exports: [
        AdminNotificationsScreenComponent
    ],
    imports: [
        CommonModule,
        AdminNotificationsListModule,
        MatIconModule
    ]
})
export class AdminNotificationsScreenModule { }
