import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {LessonFilter} from "../admin-lesson-toolbar/lesson-filter.model";
import {Lesson} from "../../../../../core/domain/lesson/lesson.model";
import {LessonElement} from "../../../../../lesson/components/lesson-element/lesson-element.model";
import {LessonService} from "../../../../../core/domain/lesson/lesson.service";
import {LessonElementService} from "../../../../../lesson/components/lesson-element/lesson-element.service";
import {MatDialog} from "@angular/material/dialog";
import {AdminLessonDetailComponent} from "../admin-lesson-detail/admin-lesson-detail.component";
import {AdminLessonAddComponent} from "../admin-lesson-add/admin-lesson-add.component";

@Component({
    selector: 'prez-admin-lesson-screen',
    templateUrl: './admin-lesson-screen.component.html',
    styleUrls: ['./admin-lesson-screen.component.scss']
})
export class AdminLessonScreenComponent implements OnInit, OnChanges {

    @Input() lessonFilter: LessonFilter;
    public lessonElements?: LessonElement[];
    private lessonsData?: Lesson[];

    constructor(private lessonService: LessonService,
                private lessonElementService: LessonElementService,
                public dialog: MatDialog) { }

    ngOnInit(): void {
        this.initLessonsData(this.lessonFilter);
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes["lessonFilter"] && !changes["lessonFilter"].isFirstChange()){
            this.initLessonsData(this.lessonFilter);
        }
    }

    public applyFilter(lessonFilter: LessonFilter):void{
        this.initLessonsData(lessonFilter);
    }

    public openLessonDetailDialog(lessonScheduleData: any) {
        const lessonUid: number = lessonScheduleData.data.uid;
        const dialogRef = this.dialog.open(
            AdminLessonDetailComponent,{
                data:{
                    lessonUid: lessonUid
                }
            });
        dialogRef.afterClosed().subscribe(result => {
            this.initLessonsData(this.lessonFilter);
            console.log(`Dialog result: ${result}`);
        });
    }

    private initLessonsData(lessonFilter: LessonFilter): void{
        if (!lessonFilter) return;
        this.lessonService.getLessonFiltered(lessonFilter).subscribe(
            lessons => {
                this.lessonsData = lessons;
                this.lessonElements = this.lessonElementService.mapLessonElements(this.lessonsData);
            },
            error => {
                console.warn(error);
            }
        )
    }

    public openAddLessonDialog(args: any): void {
        console.log("in", args.startTime, args.endTime)
        const dialogRef = this.dialog.open(
            AdminLessonAddComponent,{
                data:{
                    start_at: args.startTime,
                    end_at: args.endTime
                }
            });
        dialogRef.afterClosed().subscribe(result => {
            this.initLessonsData(this.lessonFilter)
            console.log(`Dialog result: ${result}`);
        });
    }

}
