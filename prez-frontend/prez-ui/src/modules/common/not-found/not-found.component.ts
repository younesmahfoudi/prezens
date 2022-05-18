import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'prez-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

    public logo: string = './assets/img/minilogo.svg';

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    public navigate(): void{
        this.router.navigate(["/auth"]);
    }

}
