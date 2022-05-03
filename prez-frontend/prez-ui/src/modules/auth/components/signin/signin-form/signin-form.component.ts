import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'prez-signin-form',
    templateUrl: './signin-form.component.html',
    styleUrls: ['./signin-form.component.scss']
})
export class SigninFormComponent implements OnInit {

    public hide: boolean = true;
    public signinForm = new FormGroup({
            email : new FormControl('', [Validators.required, Validators.email]),
            password : new FormControl('', [Validators.required, Validators.minLength(4)])
        }
    )
    @Output() formEmitter = new EventEmitter<FormGroup>();

    constructor() {
    }

    ngOnInit(): void {
    }

    public getErrorMessageMail() {

        if (this.signinForm.controls["email"].hasError('required')) {
            return 'You must enter a value';
        }

        return this.signinForm.controls["email"].hasError('email') ? 'Not a valid email' : '';
    }

    public getErrorMessagePwd() {
        if (this.signinForm.controls["password"].hasError('required')) {
            return 'You must enter a value';
        }

        return this.signinForm.controls["password"].hasError('minlength') ? 'Not a valid password' : '';
    }

    public submit(value: FormGroup) {
        this.formEmitter.emit(value);
    }

}
