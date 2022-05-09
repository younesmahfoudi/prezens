import {Component, Input, OnInit} from '@angular/core';
import {RegisterElement} from "../register-element/register-element.model";

@Component({
    selector: 'prez-register-detail',
    templateUrl: './register-detail.component.html',
    styleUrls: ['./register-detail.component.scss']
})
export class RegisterDetailComponent implements OnInit {

    @Input() registerElement: RegisterElement;

    constructor() { }

    ngOnInit(): void {
    }

}
