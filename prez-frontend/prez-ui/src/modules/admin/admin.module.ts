import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminComponent} from './admin.component';
import {AdminScreenModule} from "./components/admin/admin-screen/admin-screen.module";
import { AdminNotificationsScreenComponent } from './components/admin/notifications/admin-notifications-screen/admin-notifications-screen.component';
import { AdminNotificationsListComponent } from './components/admin/notifications/admin-notifications-list/admin-notifications-list.component';
import { AdminNotificationsDetailComponent } from './components/admin/notifications/admin-notifications-detail/admin-notifications-detail.component';


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
