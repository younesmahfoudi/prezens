import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {LessonFilter} from "../admin-lesson-toolbar/lesson-filter.model";
import {Lesson} from "../../../../../core/domain/lesson/lesson.model";
import {LessonElement} from "../../../../../lesson/components/lesson-element/lesson-element.model";
import {LessonService} from "../../../../../core/domain/lesson/lesson.service";
import {LessonElementService} from "../../../../../lesson/components/lesson-element/lesson-element.service";

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
                private lessonElementService: LessonElementService) { }

    ngOnInit(): void {
        this.initLessonsData(this.lessonFilter);
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes["lessonFilter"] && !changes["lessonFilter"].isFirstChange()){
            this.initLessonsData(this.lessonFilter);
        }
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

    public applyFilter(lessonFilter: LessonFilter):void{
        this.initLessonsData(lessonFilter);
    }
}
