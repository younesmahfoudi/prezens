import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ClassroomElement} from 'src/modules/classroom/components/classroom-element/classroom-element.model';
import {Classroom} from 'src/modules/core/domain/classroom/classroom.model';
import {Lesson} from 'src/modules/core/domain/lesson/lesson.model';
import {LessonService} from 'src/modules/core/domain/lesson/lesson.service';
import {LessonElement} from 'src/modules/lesson/components/lesson-element/lesson-element.model';
import {LessonElementService} from 'src/modules/lesson/components/lesson-element/lesson-element.service';
import {ProfessorElement} from '../professor-element/professor-element.model';
import {LessonFilter} from "../../../../admin/components/admin/lesson/admin-lesson-toolbar/lesson-filter.model";
import {ClassroomService} from "../../../../core/domain/classroom/classroom.service";
import {ClassroomElementService} from "../../../../classroom/components/classroom-element/classroom-element.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
    selector: 'prez-professor-lesson-screen',
    templateUrl: './professor-lesson-screen.component.html',
    styleUrls: ['./professor-lesson-screen.component.scss']
})
export class ProfessorLessonScreenComponent implements OnInit,OnChanges {

    @Input() professorElement?: ProfessorElement;
    @Input() classroomElement?: ClassroomElement;
    @Input() lessonFilter: LessonFilter;
    public lessonElements?: LessonElement[];
    public currentDate?: Date;
    private lessonData?: Lesson[];
    private classroomData?: Classroom;

    constructor(
        private lessonService: LessonService,
        private lessonElementService: LessonElementService,
        private classroomService: ClassroomService,
        private classroomElementService: ClassroomElementService,
        public dialog: MatDialog
    ) {
    }

    ngOnInit(): void {
        this.initData();
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes["lessonFilter"] && !changes["lessonFilter"].isFirstChange()){
            this.initData();
        }
    }

    public applyFilter(lessonFilter: LessonFilter): void {
        this.initLessonData(lessonFilter);
    }

    public openLessonDetailDialog(lessonScheduleData: any) {
        const lessonUid: number = lessonScheduleData.data.uid;
        console.log(lessonUid)
        this.lessonService.getLesson(lessonUid).subscribe(
            lesson => {
                this.singleLessonData = lesson;
                this.lessonElement = this.lessonElementService.mapLessonElement(this.singleLessonData);
                this.openDialog(this.lessonElement)
            },
            error => {
                console.warn(error);
            }
        )
    }

    openDialog(lessonElement: LessonElement) {
        debugger
        if (!lessonElement) return;
        if (this.compareDate((lessonElement.end_at))) {
            const dialogRef = this.dialog.open(
                ProfessorDialogComponent, {
                    data: {
                        lessonElement: lessonElement
                    }
                });
            dialogRef.afterClosed().subscribe(result => {
                this.initLessonData(this.lessonFilter);
                console.log(`Dialog result: ${result}`);
            });
        }
        else {
            const dialogRef = this.dialog.open(
                ProfessorRegisterDialogComponent, {
                    data: {
                        lessonElement: lessonElement
                    }
                });
            dialogRef.afterClosed().subscribe(result => {
                this.initLessonData(this.lessonFilter);
                console.log(`Dialog result: ${result}`);
            });
        }
    }

    public compareDate(lessonDate: Date): boolean{
        return (this.currentDate > new Date(lessonDate))
    }

    private initData(): void {
        this.initLessonData(this.lessonFilter);
        this.currentDate = new Date()
    }

    private initLessonData(lessonFilter: LessonFilter): void {
        if (!lessonFilter) return;
        this.lessonService.getLessonFiltered(lessonFilter).subscribe(
            lessons => {
                this.lessonData = lessons;
                this.lessonElements = this.lessonElementService.mapLessonElements(this.lessonData);
            },
            error => {
                console.warn(error);
            }
        )
    }
}
