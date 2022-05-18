import {Component, OnInit} from '@angular/core';
import {User} from "../../../core/domain/user/user.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AdminService} from "../../../core/domain/admin/admin.service";
import {Router} from "@angular/router";

@Component({
    selector: 'prez-signup-admin',
    templateUrl: './signup-admin.component.html',
    styleUrls: ['./signup-admin.component.scss']
})
export class SignupAdminComponent implements OnInit {

    public signupDone?: string;
    public user?: User;
    public hide: boolean = true;
    public errorMessage?: string;
    public adminDataFormGroup: FormGroup;

    constructor(private _formBuilder: FormBuilder,
                private adminService: AdminService,
                private router: Router) {}

    ngOnInit() {
        this.adminDataFormGroup = this._formBuilder.group({
            email: ['', Validators.compose( [Validators.required, Validators.email])],
            first_name: ['', Validators.required],
            last_name: ['', Validators.required],
            password: ['', Validators.compose([Validators.required, Validators.minLength(4)])]
        });
    }

    public submit(): void {
        if (!this.adminDataFormGroup.valid) return;
        this.adminService.signupAdmin(this.adminDataFormGroup.value).subscribe(
            () => {
                this.errorMessage = undefined;
                this.signupDone = 'registration successfully completed'
                this.router.navigate(["/","auth"])
            },
            error => {
                this.errorMessage = error.error.detail;
            }
        )
    }
}
