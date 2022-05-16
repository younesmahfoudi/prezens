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
    private registerElement?: RegisterElement;


    ngOnInit(): void {
        this.initData();
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['registerElement']) this.initData()
    }


    private initData(): void {
        this.initLessonData(this.professorElement?.uid);
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

    generateRegister(lesson: LessonElement): void {
        debugger
        console.log(lesson)
        this.registerService.initClassroomRegister(lesson.class_uid, lesson.register.uid)
        console.log(lesson)
        this.registerElement = lesson.register
        console.log(this.registerElement)
    }

    openDialog(lesson: LessonElement): void {
        const dialogRef = this.dialog.open(ProfessorDialogComponent, {
            data: {
                lessonElement: lesson
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('Redirect vers register screen');
            this.initData()
        });
    }

    /**public updateRegisteredStudent(registeredStudentElement: RegisteredStudentElement) {
        if (!registeredStudentElement) return;
        if (registeredStudentElement.status == Status.Present) {
            this.registeredStudentUpdate.status = Status.Absent;
            this.registerService.updateRegisteredStudent(registeredStudentElement.uid, this.registeredStudentUpdate).subscribe(
                () => {
                    this.submitLoading = false;
                    this.submitDone = true
                },
                error => {
                    console.warn(error);
                    this.submitLoading = false;
                }
            )
        } else if (registeredStudentElement.status == Status.Absent) {
            this.registeredStudentUpdate.status = Status.Present;
            this.registerService.updateRegisteredStudent(registeredStudentElement.uid, this.registeredStudentUpdate).subscribe(
                () => {
                    this.submitLoading = false;
                    this.submitDone = true
                },
                error => {
                    console.warn(error);
                    this.submitLoading = false;
                }
            )
        }
    }**/
}
