import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RegisteredStudentElement} from "../../../../../register/components/register-element/register-element.model";
import {AdminNotificationsDetailComponent} from "../admin-notifications-detail/admin-notifications-detail.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
    selector: 'prez-admin-notifications-list',
    templateUrl: './admin-notifications-list.component.html',
    styleUrls: ['./admin-notifications-list.component.scss'],
})
export class AdminNotificationsListComponent implements OnInit {

    @Input() registeredStudentElements: RegisteredStudentElement[];
    @Output() refreshEmitter = new EventEmitter();

    constructor(public dialog: MatDialog) {
    }

    ngOnInit(): void {
    }

    public openLessonDetailDialog(registeredStudentElement: RegisteredStudentElement) {
        const dialogRef = this.dialog.open(
            AdminNotificationsDetailComponent, {
                data: {
                    registeredStudentElement: registeredStudentElement
                }
            });
        dialogRef.afterClosed().subscribe(result => {
            this.refreshEmitter.emit();
            console.log(`Dialog result: ${result}`);
        });
    }

}
