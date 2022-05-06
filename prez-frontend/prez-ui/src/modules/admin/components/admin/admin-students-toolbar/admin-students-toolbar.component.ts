import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ClassroomElement} from "../../../../classroom/components/classroom-element/classroom-element.model";
import {AdminStudentsFilter} from "../admin-classrooms-screen/admin-students-filter.model";
import {Classroom} from "../../../../core/domain/classroom/classroom.model";
import {ClassroomService} from "../../../../core/domain/classroom/classroom.service";
import {ClassroomElementService} from "../../../../classroom/components/classroom-element/classroom-element.service";
import {MatDialog} from "@angular/material/dialog";
import {AdminAddClassroomComponent} from "../admin-add-classroom/admin-add-classroom.component";
import {AdminAddStudentComponent} from "../admin-add-student/admin-add-student.component";
import {AdminClassroomScheduleComponent} from "../admin-classroom-schedule/admin-classroom-schedule.component";

@Component({
    selector: 'prez-admin-students-toolbar',
    templateUrl: './admin-students-toolbar.component.html',
    styleUrls: ['./admin-students-toolbar.component.scss']
})
export class AdminStudentsToolbarComponent implements OnInit {

    @Output() filterEmitter = new EventEmitter<AdminStudentsFilter>();
    public classroomElements?: ClassroomElement[];
    public studentsFilter: AdminStudentsFilter = {};
    private classroomsData: Classroom[] = [];

    constructor(private classroomService: ClassroomService,
                private classroomElementService: ClassroomElementService,
                public dialog: MatDialog) { }

    ngOnInit(): void {
        this.initClassroomsData()
    }

    public emitFilter(filter: AdminStudentsFilter): void{
        this.filterEmitter.emit(filter);
    }

    public setClassroomFilter(classroomElement: ClassroomElement): void {
        this.studentsFilter.classroom = classroomElement;
        this.emitFilter(this.studentsFilter);
    }

    public openClassroomDialog() {
        const dialogRef = this.dialog.open(AdminAddClassroomComponent);
        dialogRef.afterClosed().subscribe(result => {
            this.studentsFilter = {};
            this.initClassroomsData();
            console.log(`Dialog result: ${result}`);
        });
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

    public openStudentDialog() {
        const dialogRef = this.dialog.open(AdminAddStudentComponent);
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
