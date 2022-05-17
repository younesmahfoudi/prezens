import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ProfessorElement} from "../professor-element/professor-element.model";
import {LessonElement} from "../../../../lesson/components/lesson-element/lesson-element.model";
import {Lesson} from "../../../../core/domain/lesson/lesson.model";
import {RegisterElement} from "../../../../register/components/register-element/register-element.model";
import {RegisterService} from "../../../../core/domain/register/register.service";
import {LessonService} from "../../../../core/domain/lesson/lesson.service";
import {LessonElementService} from "../../../../lesson/components/lesson-element/lesson-element.service";
import {ClassroomService} from "../../../../core/domain/classroom/classroom.service";
import {ProfessorDialogComponent} from "../professor-dialog/professor-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {ProfessorRegisterDialogModule} from "../professor-register-dialog/professor-register-dialog.module";
import {ProfessorRegisterDialogComponent} from "../professor-register-dialog/professor-register-dialog.component";
import {RegisteredStudent} from "../../../../core/domain/register/register.model";

@Component({
    selector: 'prez-professor-register-screen',
    templateUrl: './professor-register-screen.component.html',
    styleUrls: ['./professor-register-screen.component.scss']
})
export class ProfessorRegisterScreenComponent implements OnInit, OnChanges {

    constructor(
        private lessonService: LessonService,
        private lessonElementService: LessonElementService,
        private classroomService: ClassroomService,
        private registerService: RegisterService,
        private dialog: MatDialog
    ) {
    }


    @Input() professorElement?: ProfessorElement;
    // @Input() classroomElement?: ClassroomElement;
    public lessonElements?: LessonElement[];
    private lessonData?: Lesson[];
    private updateRegisteredStudents: RegisteredStudent[]
    private registerElement?: RegisterElement;
    public submitLoading: boolean = false;
    public submitDone: boolean = false;
    public hideSubmit: boolean = true;
    public currentDate: Date;


    ngOnInit(): void {
        this.initData();
        this.currentDate = new Date()
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['registerElement']) this.initData()
    }


    private initData(): void {
        this.initLessonData(this.professorElement?.uid);
        this.currentDate = new Date()
        console.log(this.currentDate)
    }

    public compareDate(lessonDate: Date): boolean {
        return (this.currentDate > new Date(lessonDate))
    }

    private initLessonData(professorUid?: number): void {
        if (!professorUid) return;
        this.lessonService.getLessonsByDate(professorUid, "after").subscribe(
            lessons => {
                this.lessonData = lessons;
                this.lessonElements = this.lessonElementService.mapLessonElements(this.lessonData);
            },
            error => {
                console.warn(error);
            }
        )
    }

    public generateRegister(lesson: LessonElement): void {
        this.registerService.initClassroomRegister(lesson.class_uid, lesson.register.uid).subscribe(
            () => {
                this.openDialog(lesson)
            },
            error => {
                console.warn(error)
            }
        )
    }

    openDialog(lesson: LessonElement): void {
        const dialogRef = this.dialog.open(ProfessorRegisterDialogComponent, {
            data: {
                lessonElement: lesson,
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            this.initData()
        });
    }
}
