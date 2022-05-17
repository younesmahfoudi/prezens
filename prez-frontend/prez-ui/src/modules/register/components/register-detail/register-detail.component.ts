import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RegisterElement} from "../register-element/register-element.model";
import {RegisteredStudent} from "../../../core/domain/register/register.model";
import {Status} from "../../../core/domain/register/status.enum";


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
