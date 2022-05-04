import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ClassroomElement} from "../classroom-element/classroom-element.model";

@Component({
    selector: 'prez-classroom-select',
    templateUrl: './classroom-select.component.html',
    styleUrls: ['./classroom-select.component.scss']
})
export class ClassroomSelectComponent implements OnInit {

    @Input() classroomElements: ClassroomElement[];
    @Output() classroomEmitter = new EventEmitter<ClassroomElement>();

    constructor() { }

    ngOnInit(): void {
    }

    public emitClassroom(classroomElement?: ClassroomElement): void{
        this.classroomEmitter.emit(classroomElement);
    }

}
