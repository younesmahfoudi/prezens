import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'prez-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

    public logo: string = './assets/img/minilogo.svg';

    constructor() { }

    ngOnInit(): void {
    }

}
