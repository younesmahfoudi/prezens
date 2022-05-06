import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ClassroomElement} from "../../../../classroom/components/classroom-element/classroom-element.model";
import {LessonService} from "../../../../core/domain/lesson/lesson.service";
import {LessonElementService} from "../../../../lesson/components/lesson-element/lesson-element.service";
import {Lesson} from "../../../../core/domain/lesson/lesson.model";
import {LessonElement} from "../../../../lesson/components/lesson-element/lesson-element.model";

@Component({
    selector: 'prez-admin-classroom-schedule',
    templateUrl: './admin-classroom-schedule.component.html',
    styleUrls: ['./admin-classroom-schedule.component.scss']
})
export class AdminClassroomScheduleComponent implements OnInit {

    public lessonElements: LessonElement[] = [];
    private lessonsData: Lesson[] = [];

    constructor(private lessonService: LessonService,
                private lessonElementService: LessonElementService,
                @Inject(MAT_DIALOG_DATA) public data: {
                    classroomElement: ClassroomElement;
                }) { }

    ngOnInit(): void {
        this.initData();
    }

    private initData(): void{
        this.initLessonsData(this.data.classroomElement.uid);
    }

    private initLessonsData(classroomUid: number): void {
        if (classroomUid) return;
        this.lessonService.getClassroomLessons(classroomUid).subscribe(
            lessons => {
                this.lessonsData = lessons;
                this.lessonElements = this.lessonElementService.mapLessonElements(this.lessonsData);
            },
            error => {
                console.warn(error);
            }
        )
    }

}
