import {Component, Input, OnInit} from '@angular/core';
import {ClassroomService} from 'src/modules/core/domain/classroom/classroom.service';
import {Lesson} from 'src/modules/core/domain/lesson/lesson.model';
import {LessonService} from 'src/modules/core/domain/lesson/lesson.service';
import {LessonElement} from 'src/modules/lesson/components/lesson-element/lesson-element.model';
import {LessonElementService} from 'src/modules/lesson/components/lesson-element/lesson-element.service';
import {ProfessorElement} from '../professor-element/professor-element.model';
import {MatDialog} from '@angular/material/dialog';
import {ProfessorDialogComponent} from "../professor-dialog/professor-dialog.component";
import {RegisterService} from "../../../../core/domain/register/register.service";
import {RegisterElement} from "../../../../register/components/register-element/register-element.model";

@Component({
    selector: 'prez-professor-history',
    templateUrl: './professor-history.component.html',
    styleUrls: ['./professor-history.component.scss']
})
export class ProfessorHistoryComponent implements OnInit {

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


    private initData(): void {
        this.initLessonData(this.professorElement?.uid);
    }

    private initLessonData(professorUid?: number): void {
        if (!professorUid) return;
        this.lessonService.getLessonsByDate(professorUid,"before").subscribe(
            lessons => {
                this.lessonData = lessons;
                this.lessonElements = this.lessonElementService.mapLessonElements(this.lessonData);
            },
            error => {
                console.warn(error);
            }
        )
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


}
