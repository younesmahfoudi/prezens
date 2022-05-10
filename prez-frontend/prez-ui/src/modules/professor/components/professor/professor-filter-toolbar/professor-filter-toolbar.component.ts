import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {LessonFilter} from "../../../../admin/components/admin/lesson/admin-lesson-toolbar/lesson-filter.model";
import {ClassroomElement} from "../../../../classroom/components/classroom-element/classroom-element.model";
import {ProfessorElement} from "../professor-element/professor-element.model";
import {Classroom} from "../../../../core/domain/classroom/classroom.model";
import {Professor} from "../../../../core/domain/professor/professor.model";
import {ClassroomService} from "../../../../core/domain/classroom/classroom.service";
import {ClassroomElementService} from "../../../../classroom/components/classroom-element/classroom-element.service";
import {ProfessorService} from "../../../../core/domain/professor/professor.service";
import {ProfessorElementService} from "../professor-element/professor-element.service";
import {MatDialog} from "@angular/material/dialog";
import {AdminStudentsFilter} from "../../../../admin/components/admin/admin-classrooms-screen/admin-students-filter.model";

@Component({
    selector: 'prez-professor-filter-toolbar',
    templateUrl: './professor-filter-toolbar.component.html',
    styleUrls: ['./professor-filter-toolbar.component.scss']
})
export class ProfessorFilterToolbarComponent implements OnInit {

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
                public dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.initData();
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes["lessonFilter"]) {
            console.log(changes)
        }
    }

    public emitFilter(filter: AdminStudentsFilter): void {
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

    private initData() {
        this.initClassroomsData();
        this.initProfessorData();
    }

    private initClassroomsData(): void {
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

    private initProfessorData(): void {
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
