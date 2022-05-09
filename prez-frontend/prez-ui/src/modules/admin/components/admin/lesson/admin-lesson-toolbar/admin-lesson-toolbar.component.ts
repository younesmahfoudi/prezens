import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {AdminStudentsFilter} from "../../admin-classrooms-screen/admin-students-filter.model";
import {ClassroomElement} from "../../../../../classroom/components/classroom-element/classroom-element.model";
import {Classroom} from "../../../../../core/domain/classroom/classroom.model";
import {ClassroomService} from "../../../../../core/domain/classroom/classroom.service";
import {ClassroomElementService} from "../../../../../classroom/components/classroom-element/classroom-element.service";
import {MatDialog} from "@angular/material/dialog";
import {LessonFilter} from "./lesson-filter.model";
import {ProfessorService} from "../../../../../core/domain/professor/professor.service";
import {
    ProfessorElementService
} from "../../../../../professor/components/professor/professor-element/professor-element.service";
import {Professor} from "../../../../../core/domain/professor/professor.model";
import {
    ProfessorElement
} from "../../../../../professor/components/professor/professor-element/professor-element.model";
import {AdminLessonAddComponent} from "../admin-lesson-add/admin-lesson-add.component";

@Component({
    selector: 'prez-admin-lesson-toolbar',
    templateUrl: './admin-lesson-toolbar.component.html',
    styleUrls: ['./admin-lesson-toolbar.component.scss']
})
export class AdminLessonToolbarComponent implements OnInit, OnChanges {

    @Input() lessonFilter: LessonFilter;
    @Output() filterEmitter = new EventEmitter<LessonFilter>();
    public classroomElements?: ClassroomElement[];
    public professorElements: ProfessorElement[];
    private classroomsData: Classroom[] = [];
    private professorsData: Professor[];

    constructor(private classroomService: ClassroomService,
                private classroomElementService: ClassroomElementService,
                private professorService: ProfessorService,
                private professorElementService: ProfessorElementService,
                public dialog: MatDialog) { }

    ngOnInit(): void {
        this.initData();
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes["lessonFilter"]){
            console.log(changes)
        }
    }

    public emitFilter(filter: AdminStudentsFilter): void{
        this.filterEmitter.emit(filter);
    }

    public setClassroomFilter(classroomElement?: ClassroomElement): void {
        this.lessonFilter.classroom = classroomElement;
        this.emitFilter(this.lessonFilter);
    }

    public setProfessorFilter(professorElement?: ProfessorElement): void {
        this.lessonFilter.professor = professorElement;
        this.emitFilter(this.lessonFilter);
    }

    public openLessonAddDialog(lessonScheduleData: any) {
        const dialogRef = this.dialog.open(
            AdminLessonAddComponent,{
                data:{
                    professorElements: this.professorElements,
                    classroomElements: this.classroomElements
                }
            });
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }

    private initData(){
        this.initClassroomsData();
        this.initProfessorData();
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

    private initProfessorData(): void{
        this.professorService.getProfessors().subscribe(
            professors => {
                this.professorsData = professors;
                this.professorElements = this.professorElementService.mapProfessorElements(this.professorsData);
            },
            error => {
                console.warn(error);
            }
        )
    }

}
