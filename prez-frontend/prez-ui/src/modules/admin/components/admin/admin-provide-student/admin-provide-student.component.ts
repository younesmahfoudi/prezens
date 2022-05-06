import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../../core/domain/user/user.service";
import {User} from "../../../../core/domain/user/user.model";
import {Role} from "../../../../core/domain/user/role.enum";

@Component({
    selector: 'prez-admin-provide-student',
    templateUrl: './admin-provide-student.component.html',
    styleUrls: ['./admin-provide-student.component.scss']
})
export class AdminProvideStudentComponent implements OnInit {

    public userStudentForm = new FormGroup({
            email : new FormControl('', [Validators.required, Validators.email])
        }
    )

    public addLoading: boolean = false;
    public addDone: boolean = false;
    public errorMessage?: string;

    constructor(private userService: UserService) { }

    ngOnInit(): void {
    }

    public getErrorMessageEmail() {

        if (this.userStudentForm.controls["email"].hasError('required')) {
            return 'You must enter a value';
        }
        return this.userStudentForm.controls["email"].hasError('email') ? 'Not a valid email' : '';
    }

    public provideStudent(email: string): void{
        if (!email) return;
        this.addLoading = true;
        this.addDone = false;
        const user: User = {email: email, role: Role.Student};
        this.userService.provideUser(user).subscribe(
            user => {
                this.addLoading = false;
                this.addDone = true;
            },
            error => {
                this.addLoading = false;
                this.errorMessage = error.error.detail;
                console.warn(error);
            }
        )
    }

}
