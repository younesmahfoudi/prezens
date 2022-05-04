import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StudentElement} from "../student-element/student-element.model";


@Component({
    selector: 'prez-student-list',
    templateUrl: './student-list.component.html',
    styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

    @Input() studentElements: StudentElement[] = [];
    @Output() studentEmitter = new EventEmitter<StudentElement>();

    constructor() { }

    ngOnInit(): void {
    }

    public emitStudent(student: StudentElement): void{
        this.studentEmitter.emit(student)
    }

}
