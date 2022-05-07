import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges,
    ViewEncapsulation
} from '@angular/core';
import {ClassroomElement} from "../classroom-element/classroom-element.model";

@Component({
    selector: 'prez-classroom-select',
    templateUrl: './classroom-select.component.html',
    styleUrls: ['./classroom-select.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ClassroomSelectComponent implements OnInit, OnChanges {

    @Input() classroomElements: ClassroomElement[];
    @Input() classroomSelected?: ClassroomElement;
    @Output() classroomEmitter = new EventEmitter<ClassroomElement>();
    public classroomElement?: ClassroomElement;

    constructor() { }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges) {
        if (this.classroomSelected){
            this.classroomElement = this.classroomElements.filter(c => c.uid === this.classroomSelected?.uid)[0];
            console.log(this.classroomElement)
        }else {
            this.classroomElement = undefined;
        }
    }

    public emitClassroom(classroomElement?: ClassroomElement): void{
        this.classroomSelected = classroomElement;
        this.classroomEmitter.emit(classroomElement);
    }

}
