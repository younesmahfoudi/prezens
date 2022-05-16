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
import {MatDialog} from "@angular/material/dialog";
import {ProfessorDeleteComponent} from "../professor-delete/professor-delete.component";

@Component({
    selector: 'prez-professor-grid',
    templateUrl: './professor-grid.component.html',
    styleUrls: ['./professor-grid.component.scss']
})
export class ProfessorGridComponent implements AfterViewInit, OnChanges {

    @Input() professorElements: ProfessorElement[];
    @Output() professorEmitter = new EventEmitter<ProfessorElement>();
    @Output() refreshEmitter = new EventEmitter();
    @ViewChild(MatPaginator) paginator: MatPaginator;

    public dataSource: MatTableDataSource<ProfessorElement>
    public displayedColumns: string[] = ['first_name', 'last_name', 'email', 'actions'];

    constructor(private dialog: MatDialog) {}

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

    public openDialog(professorElement: ProfessorElement): void {
        const dialogRef = this.dialog.open(ProfessorDeleteComponent, {
            data: {
                professorElement: professorElement
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('Redirect vers register screen');
            this.refreshEmitter.emit();
        });
    }

    private initDataSource(): void{
        this.dataSource = new MatTableDataSource(this.professorElements);
        this.dataSource.paginator = this.paginator;
    }

}
