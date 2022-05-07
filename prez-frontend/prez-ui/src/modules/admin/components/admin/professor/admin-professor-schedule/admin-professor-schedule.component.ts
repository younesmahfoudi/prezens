import {Component, Inject, OnInit} from '@angular/core';
import {LessonElement} from "../../../../../lesson/components/lesson-element/lesson-element.model";
import {Lesson} from "../../../../../core/domain/lesson/lesson.model";
import {LessonService} from "../../../../../core/domain/lesson/lesson.service";
import {LessonElementService} from "../../../../../lesson/components/lesson-element/lesson-element.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {
    ProfessorElement
} from "../../../../../professor/components/professor/professor-element/professor-element.model";

@Component({
    selector: 'prez-admin-professor-schedule',
    templateUrl: './admin-professor-schedule.component.html',
    styleUrls: ['./admin-professor-schedule.component.scss']
})
export class AdminProfessorScheduleComponent implements OnInit {

    public lessonElements: LessonElement[] = [];
    private lessonsData: Lesson[] = [];

    constructor(private lessonService: LessonService,
                private lessonElementService: LessonElementService,
                @Inject(MAT_DIALOG_DATA) public data: {
                    professorElement: ProfessorElement;
                }) { }

    ngOnInit(): void {
        this.initData();
    }

    private initData(): void{
        this.initLessonsData(this.data.professorElement.uid);
    }

    private initLessonsData(professorUid: number): void {
        if (!professorUid) return;
        this.lessonService.getLessonsByProfessor(professorUid).subscribe(
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
