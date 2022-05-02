import {Component, Input, OnInit} from '@angular/core';
import {ClassroomElement} from "../classroom-element/classroom-element.model";

@Component({
    selector: 'prez-classroom-detail',
    templateUrl: './classroom-detail.component.html',
    styleUrls: ['./classroom-detail.component.scss']
})
export class ClassroomDetailComponent implements OnInit {

    @Input() classroomElement?: ClassroomElement;

    constructor() { }

    ngOnInit(): void {
    }

}
