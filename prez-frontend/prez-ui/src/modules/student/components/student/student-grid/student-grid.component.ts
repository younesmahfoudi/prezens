import {AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {StudentElement} from "../student-element/student-element.model";
import {MatTableDataSource} from "@angular/material/table";

@Component({
    selector: 'prez-student-grid',
    templateUrl: './student-grid.component.html',
    styleUrls: ['./student-grid.component.scss']
})
export class StudentGridComponent implements AfterViewInit, OnChanges {

    @Input() studentElements: StudentElement[];
    @ViewChild(MatPaginator) paginator: MatPaginator;

    public dataSource: MatTableDataSource<StudentElement>

    displayedColumns: string[] = ['student_id', 'first_name', 'last_name', 'email', 'actions'];

    constructor() {}

    ngAfterViewInit() {
        this.initDataSource();
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes["studentElements"]){
            this.initDataSource()
        }
    }

    private initDataSource(): void{
        this.dataSource = new MatTableDataSource(this.studentElements);
        this.dataSource.paginator = this.paginator;
    }

}
