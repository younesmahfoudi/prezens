import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'prez-student-logo',
    templateUrl: './student-logo.component.html',
    styleUrls: ['./student-logo.component.scss']
})
export class StudentLogoComponent implements OnInit {

    public logo: string = './assets/img/minilogo.svg';

    constructor() { }

    ngOnInit(): void {
    }

}
