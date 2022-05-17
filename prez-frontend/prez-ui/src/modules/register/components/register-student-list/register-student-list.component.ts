import {Component, Input, OnInit} from '@angular/core';
import {RegisteredStudent} from "../../../core/domain/register/register.model";
import {Status} from "../../../core/domain/register/status.enum";

@Component({
    selector: 'prez-register-student-list',
    templateUrl: './register-student-list.component.html',
    styleUrls: ['./register-student-list.component.scss']
})
export class RegisterStudentListComponent implements OnInit {

    @Input() registeredStudents: RegisteredStudent[];

    constructor() { }

    ngOnInit(): void {
    }

    public getPriority(status: Status): string{
        switch(status) {
            case Status.Present: {
                return "green";
            }
            case Status.Absent: {
                return "red";
            }
            case Status.Pending: {
                return "orange";
            }
            case Status.Justified: {
                return "blue";
            }
            case Status.Denied: {
                return "red";
            }
            default: {
                return "grey";
            }
        }
    }

}
