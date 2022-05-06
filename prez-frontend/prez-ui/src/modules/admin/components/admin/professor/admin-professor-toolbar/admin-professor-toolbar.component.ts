import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AdminStudentsFilter} from "../../admin-classrooms-screen/admin-students-filter.model";
import {ClassroomElement} from "../../../../../classroom/components/classroom-element/classroom-element.model";
import {Classroom} from "../../../../../core/domain/classroom/classroom.model";
import {ClassroomService} from "../../../../../core/domain/classroom/classroom.service";
import {ClassroomElementService} from "../../../../../classroom/components/classroom-element/classroom-element.service";
import {MatDialog} from "@angular/material/dialog";
import {AdminClassroomScheduleComponent} from "../../admin-classroom-schedule/admin-classroom-schedule.component";
import {AdminProfessorFilter} from "./AdminProfessorFilter.model";
import {AdminAddProfessorComponent} from "../admin-add-professor/admin-add-professor.component";

@Component({
    selector: 'prez-admin-professor-toolbar',
    templateUrl: './admin-professor-toolbar.component.html',
    styleUrls: ['./admin-professor-toolbar.component.scss']
})
export class AdminProfessorToolbarComponent implements OnInit {

    @Output() filterEmitter = new EventEmitter<AdminStudentsFilter>();
    public classroomElements?: ClassroomElement[];
    public professorFilter: AdminProfessorFilter = {};
    private classroomsData: Classroom[] = [];

    constructor(private classroomService: ClassroomService,
                private classroomElementService: ClassroomElementService,
                public dialog: MatDialog) { }

    ngOnInit(): void {
        this.initClassroomsData()
    }

    public emitFilter(filter: AdminProfessorFilter): void{
        this.filterEmitter.emit(filter);
    }

    public setClassroomFilter(classroomElement: ClassroomElement): void {
        this.professorFilter.classroom = classroomElement;
        this.emitFilter(this.professorFilter);
    }

    public openClassroomScheduleDialog(classroomElement: ClassroomElement) {
        const dialogRef = this.dialog.open(
            AdminClassroomScheduleComponent,
            {
                data: {
                    classroomElement: classroomElement
                }
            }
        );
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }

    public openAddProfessorDialog() {
        const dialogRef = this.dialog.open(AdminAddProfessorComponent);
        dialogRef.afterClosed().subscribe(result => {
            this.initClassroomsData();
            this.emitFilter({})
            console.log(`Dialog result: ${result}`);
        });
    }

    private initClassroomsData(): void{
        this.classroomService.getClassrooms().subscribe(
            classrooms => {
                this.classroomsData = classrooms;
                this.classroomElements = this.classroomElementService.mapClassroomElements(this.classroomsData);
            },
            error => {
                console.warn(error);
            }
        )
    }
}
