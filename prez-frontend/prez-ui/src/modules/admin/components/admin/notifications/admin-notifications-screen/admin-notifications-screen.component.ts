import {Component, OnInit} from '@angular/core';
import {RegisterService} from "../../../../../core/domain/register/register.service";
import {RegisterElementService} from "../../../../../register/components/register-element/register-element.service";
import {RegisteredStudent} from "../../../../../core/domain/register/register.model";
import {RegisteredStudentElement} from "../../../../../register/components/register-element/register-element.model";

@Component({
    selector: 'prez-admin-notifications-screen',
    templateUrl: './admin-notifications-screen.component.html',
    styleUrls: ['./admin-notifications-screen.component.scss']
})
export class AdminNotificationsScreenComponent implements OnInit {

    public registeredStudentElements: RegisteredStudentElement[];
    private registeredStudentsData: RegisteredStudent[];

    constructor(private registerService: RegisterService,
                private registerElementService: RegisterElementService) { }

    ngOnInit(): void {
        this.initData();
    }

    private initData(): void{
        this.initRegisteredStudentsData();
    }

    private initRegisteredStudentsData(): void {
        this.registerService.getAdminNotifications().subscribe(
            registeredStudents => {
                this.registeredStudentsData = registeredStudents;
                this.registeredStudentElements = this.registerElementService.mapRegisteredStudentElements(this.registeredStudentsData);
            },
            error => {
                console.warn(error);
            }
        )
    }

}
