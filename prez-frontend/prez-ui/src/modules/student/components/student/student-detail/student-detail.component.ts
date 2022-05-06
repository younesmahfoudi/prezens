import {Component, Input, OnInit} from '@angular/core';
import {StudentElement} from "../student-element/student-element.model";

@Component({
    selector: 'prez-student-detail',
    templateUrl: './student-detail.component.html',
    styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {

    @Input() studentElement?: StudentElement;

    constructor() { }

    ngOnInit(): void {
    }

}
