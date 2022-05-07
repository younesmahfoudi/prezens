import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'prez-admin-logo',
    templateUrl: './admin-logo.component.html',
    styleUrls: ['./admin-logo.component.scss']
})
export class AdminLogoComponent implements OnInit {

    public logo: string = './assets/img/minilogo.svg';

    constructor() { }

    ngOnInit(): void {
    }

}
