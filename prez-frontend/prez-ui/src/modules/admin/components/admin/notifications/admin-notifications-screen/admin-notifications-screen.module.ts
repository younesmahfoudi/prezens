import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminNotificationsScreenComponent} from "./admin-notifications-screen.component";


@NgModule({
    declarations: [
        AdminNotificationsScreenComponent
    ],
    exports: [
        AdminNotificationsScreenComponent
    ],
    imports: [
        CommonModule
    ]
})
export class AdminNotificationsScreenModule { }
