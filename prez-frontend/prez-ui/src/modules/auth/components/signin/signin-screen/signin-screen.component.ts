import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../../core/domain/auth/auth.service";
import {FormGroup} from "@angular/forms";

@Component({
    selector: 'prez-signin-screen',
    templateUrl: './signin-screen.component.html',
    styleUrls: ['./signin-screen.component.scss']
})
export class SigninScreenComponent implements OnInit {

    public errorMessage?: string;
    public loginLoading: boolean = false;

    constructor(private authService: AuthService) {
    }

    ngOnInit(): void {
    }

    public login(form: FormGroup) {
        const val = form.value;
        if (val.email && val.password) {
            this.loginLoading = true;
            this.authService.login({email:val.email, password:val.password})
                .subscribe(
                    () => {
                        window.location.reload();
                    }
                    ,
                    error => {
                        this.loginLoading = false;
                        this.errorMessage = error.error.detail;
                    }
                );
        }
    }
}
