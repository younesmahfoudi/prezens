import {Component, Input, OnInit} from '@angular/core';
import {StudentElement} from "../student-element/student-element.model";
import {ClassroomElement} from "../../../../classroom/components/classroom-element/classroom-element.model";
import {RegisteredStudent} from "../../../../core/domain/register/register.model";
import {RegisterService} from "../../../../core/domain/register/register.service";
import {RegisterElementService} from "../../../../register/components/register-element/register-element.service";
import {RegisteredStudentElement} from "../../../../register/components/register-element/register-element.model";

@Component({
    selector: 'prez-student-notification-screen',
    templateUrl: './student-notification-screen.component.html',
    styleUrls: ['./student-notification-screen.component.scss']
})
export class StudentNotificationScreenComponent implements OnInit {

    @Input() studentElement: StudentElement;
    @Input() classroomElement: ClassroomElement;
    public notificationsElement: RegisteredStudentElement[] = [];
    private notificationsData: RegisteredStudent[] = [];

    constructor(private registerService: RegisterService,
                private registerElementService: RegisterElementService) { }

    ngOnInit(): void {
        this.initData();
    }

    private initData(){
        this.initNotificationsData(this.studentElement.uid);
    }

    private initNotificationsData(studentUid: number){
        if (!studentUid) return;
        this.registerService.getStudentNotifications(studentUid).subscribe(
            notifications => {
                this.notificationsData = notifications;
                this.notificationsElement = this.registerElementService.mapRegisteredStudentElements(this.notificationsData);
            },
            error => {
                console.warn(error);
            }
        )
    }

}
