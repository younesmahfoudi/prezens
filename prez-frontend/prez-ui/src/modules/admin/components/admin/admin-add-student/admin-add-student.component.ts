import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../core/domain/user/user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../../../core/domain/user/user.model";
import {Role} from "../../../../core/domain/user/role.enum";

@Component({
    selector: 'prez-admin-add-student',
    templateUrl: './admin-add-student.component.html',
    styleUrls: ['./admin-add-student.component.scss']
})
export class AdminAddStudentComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {

    }
}
