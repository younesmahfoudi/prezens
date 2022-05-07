import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ProfessorElement} from "../professor-element/professor-element.model";

@Component({
    selector: 'prez-professor-select',
    templateUrl: './professor-select.component.html',
    styleUrls: ['./professor-select.component.scss']
})
export class ProfessorSelectComponent implements OnInit, OnChanges {

    @Input() professorElements: ProfessorElement[];
    @Input() professorSelected?: ProfessorElement;
    @Output() professorEmitter = new EventEmitter<ProfessorElement>();
    public professorElement?: ProfessorElement;

    constructor() { }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges) {
        if (this.professorSelected){
            this.professorElement = this.professorElements.filter(p => p.uid === this.professorSelected?.uid)[0];
            console.log(this.professorElement)
        } else {
            this.professorElement = undefined;
        }
    }

    public emitProfessor(professorElement?: ProfessorElement): void{
        this.professorSelected = professorElement;
        this.professorEmitter.emit(professorElement);
    }

}
