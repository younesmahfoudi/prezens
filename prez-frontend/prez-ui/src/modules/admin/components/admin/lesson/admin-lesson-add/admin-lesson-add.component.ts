import {Component, Inject, OnInit} from '@angular/core';
import {LessonService} from "../../../../../core/domain/lesson/lesson.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ClassroomElement} from "../../../../../classroom/components/classroom-element/classroom-element.model";
import {
    ProfessorElement
} from "../../../../../professor/components/professor/professor-element/professor-element.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LessonPost} from "../../../../../core/domain/lesson/lesson.model";
import {Classroom} from "../../../../../core/domain/classroom/classroom.model";
import {Professor} from "../../../../../core/domain/professor/professor.model";
import {ClassroomService} from "../../../../../core/domain/classroom/classroom.service";
import {ClassroomElementService} from "../../../../../classroom/components/classroom-element/classroom-element.service";
import {ProfessorService} from "../../../../../core/domain/professor/professor.service";
import {
    ProfessorElementService
} from "../../../../../professor/components/professor/professor-element/professor-element.service";

@Component({
    selector: 'prez-admin-lesson-add',
    templateUrl: './admin-lesson-add.component.html',
    styleUrls: ['./admin-lesson-add.component.scss']
})
export class AdminLessonAddComponent implements OnInit {

    public classroomElements?: ClassroomElement[];
    public professorElements: ProfessorElement[];
    public lessonForm = new FormGroup({
            description: new FormControl('', [Validators.required]),
            start_at: new FormControl('', [Validators.required]),
            end_at: new FormControl('', [Validators.required]),
            professor_uid: new FormControl('', [Validators.required]),
            class_uid: new FormControl('', [Validators.required])
        }
    )
    public addLoading: boolean = false;
    public addMessage?: string;
    public errorMessage?: string;
    private classroomsData: Classroom[] = [];
    private professorsData: Professor[];

    constructor(private lessonService: LessonService,
                @Inject(MAT_DIALOG_DATA) public data: {
                    classroomElements: ClassroomElement[],
                    professorElements: ProfessorElement[],
                    start_at?: Date,
                    end_at?: Date
                },private classroomService: ClassroomService,
                private classroomElementService: ClassroomElementService,
                private professorService: ProfessorService,
                private professorElementService: ProfessorElementService) { }

    ngOnInit(): void {
        this.initData()
    }

    log(e: any){
        console.log(e)
    }

    public addLesson(lesson: LessonPost): void {
        if (!lesson) return;
        this.addLoading = true;
        this.lessonService.addLesson(lesson).subscribe(
            () => {
                this.addMessage = 'Lesson successfully added'
                this.addLoading = false;
                this.errorMessage = undefined;
            },
            error => {
                this.addLoading = false;
                this.errorMessage = error.error.detail;
                this.addMessage = undefined;
            }
        )
    }

    private initData(){
        if (this.data.start_at && this.data.end_at){
            this.lessonForm.get('start_at')?.setValue(new Date(this.data.start_at))
            this.lessonForm.get('end_at')?.setValue(new Date(this.data.end_at))
        }
        if (!this.data.classroomElements){
            this.initClassroomsData();
        }else {
            this.classroomElements = this.data.classroomElements;
        }
        if (!this.data.professorElements){
            this.initProfessorData();
        }else {
            this.professorElements = this.data.professorElements;
        }
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
