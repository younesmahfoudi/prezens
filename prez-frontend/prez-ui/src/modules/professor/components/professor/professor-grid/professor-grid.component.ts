import {
    AfterViewInit,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    SimpleChanges,
    ViewChild
} from '@angular/core';
import {ProfessorElement} from "../professor-element/professor-element.model";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";

@Component({
    selector: 'prez-professor-grid',
    templateUrl: './professor-grid.component.html',
    styleUrls: ['./professor-grid.component.scss']
})
export class ProfessorGridComponent implements AfterViewInit, OnChanges {

    @Input() professorElements: ProfessorElement[];
    @Output() professorEmitter = new EventEmitter<ProfessorElement>();
    @ViewChild(MatPaginator) paginator: MatPaginator;

    public dataSource: MatTableDataSource<ProfessorElement>
    public displayedColumns: string[] = ['first_name', 'last_name', 'email', 'actions'];

    constructor() {}

    ngAfterViewInit() {
        this.initDataSource();
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes["professorElements"]){
            this.initDataSource();
        }
    }

    public emitProfessorElement(professorElement: ProfessorElement){
        if (!professorElement) return;
        this.professorEmitter.emit(professorElement);
    }

    private initDataSource(): void{
        this.dataSource = new MatTableDataSource(this.professorElements);
        this.dataSource.paginator = this.paginator;
    }

}
