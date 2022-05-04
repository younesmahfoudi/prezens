import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ClassroomElement} from "../classroom-element/classroom-element.model";

@Component({
    selector: 'prez-classroom-list',
    templateUrl: './classroom-list.component.html',
    styleUrls: ['./classroom-list.component.scss']
})
export class ClassroomListComponent implements OnInit {

    @Input() classroomElements: ClassroomElement[] = [];
    @Output() classroomEmitter = new EventEmitter<ClassroomElement>();

    constructor() { }

    ngOnInit(): void {
    }

    public emitClassroom(classroomElement: ClassroomElement): void{
        this.classroomEmitter.emit(classroomElement);
    }

}
