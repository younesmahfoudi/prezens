import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {LessonService} from "../../../../core/domain/lesson/lesson.service";
import {LessonElementService} from "../../../../lesson/components/lesson-element/lesson-element.service";
import {Lesson} from "../../../../core/domain/lesson/lesson.model";
import {LessonElement} from "../../../../lesson/components/lesson-element/lesson-element.model";

@Component({
    selector: 'prez-student-lesson-screen',
    templateUrl: './student-lesson-screen.component.html',
    styleUrls: ['./student-lesson-screen.component.scss']
})
export class StudentLessonScreenComponent implements OnInit, OnChanges {

    @Input() studentUid?: number;
    private lessonData?: Lesson[];
    public lessonElements: LessonElement[] = [];

    constructor(
        private lessonService: LessonService,
        private lessonElementService: LessonElementService
    ) { }

    ngOnInit(): void {
        this.initData()
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes["studentUid"] && changes["studentUid"].isFirstChange()){
            this.initData();
        }
    }

    private initData(): void{
        this.initLessonData(this.studentUid);
    }

    private initLessonData(student_uid?: number): void{
        if (!student_uid) return;
        this.lessonService.getStudentLessons(student_uid).subscribe(
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
