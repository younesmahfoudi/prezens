import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../../../core/domain/user/user.service";
import {User} from "../../../../../core/domain/user/user.model";
import {Role} from "../../../../../core/domain/user/role.enum";

@Component({
    selector: 'prez-admin-provide-professor',
    templateUrl: './admin-provide-professor.component.html',
    styleUrls: ['./admin-provide-professor.component.scss']
})
export class AdminProvideProfessorComponent implements OnInit {

    public userProfessorForm = new FormGroup({
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

        if (this.userProfessorForm.controls["email"].hasError('required')) {
            return 'You must enter a value';
        }
        return this.userProfessorForm.controls["email"].hasError('email') ? 'Not a valid email' : '';
    }

    public provideProfessor(email: string): void{
        if (!email) return;
        this.addLoading = true;
        this.addDone = false;
        const user: User = {email: email, role: Role.Professor};
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
