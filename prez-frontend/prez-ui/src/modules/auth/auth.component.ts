import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'prez-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

    public signin: boolean = true;

    constructor() { }

    ngOnInit(): void {
    }

    public switch(): void {
        this.signin = !this.signin;
    }

}
