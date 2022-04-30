import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'prez-auth-logo',
    templateUrl: './auth-logo.component.html',
    styleUrls: ['./auth-logo.component.scss']
})
export class AuthLogoComponent implements OnInit {

    public logo: string = './assets/img/minilogo.svg';

    constructor() { }

    ngOnInit(): void {
    }

}
