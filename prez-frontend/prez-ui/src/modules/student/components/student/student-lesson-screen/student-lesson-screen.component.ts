import {Component, Input, OnInit} from '@angular/core';
import {LessonService} from "../../../../core/domain/lesson/lesson.service";
import {LessonElementService} from "../../../../lesson/components/lesson-element/lesson-element.service";
import {Lesson} from "../../../../core/domain/lesson/lesson.model";
import {LessonElement} from "../../../../lesson/components/lesson-element/lesson-element.model";
import {StudentElement} from "../student-element/student-element.model";
import {ClassroomService} from "../../../../core/domain/classroom/classroom.service";
import {ClassroomElementService} from "../../../../classroom/components/classroom-element/classroom-element.service";
import {Classroom} from "../../../../core/domain/classroom/classroom.model";
import {ClassroomElement} from "../../../../classroom/components/classroom-element/classroom-element.model";

@Component({
    selector: 'prez-student-lesson-screen',
    templateUrl: './student-lesson-screen.component.html',
    styleUrls: ['./student-lesson-screen.component.scss']
})
export class StudentLessonScreenComponent implements OnInit {

    @Input() studentElement?: StudentElement;
    public lessonElements?: LessonElement[];
    public classroomElement?: ClassroomElement;
    private lessonData?: Lesson[];
    private classroomData?: Classroom;

    constructor(
        private lessonService: LessonService,
        private lessonElementService: LessonElementService,
        private classroomService: ClassroomService,
        private classroomElementService: ClassroomElementService
    ) { }

    ngOnInit(): void {
        this.initData();
    }

    private initData(): void{
        this.initLessonData(this.studentElement?.uid);
        this.initClassroomData(this.studentElement?.class_uid)
    }

    private initLessonData(studentUid?: number): void{
        if (!studentUid) return;
        this.lessonService.getStudentLessons(studentUid).subscribe(
            lessons => {
                this.lessonData = lessons;
                this.lessonElements = this.lessonElementService.mapLessonElements(this.lessonData);
            },
            error => {
                console.warn(error);
            }
        )
    }

    private initClassroomData(classroomUid?: number): void{
        if (!classroomUid) return;
        this.classroomService.getClassroom(classroomUid).subscribe(
            classroom => {
                this.classroomData = classroom;
                this.classroomElement = this.classroomElementService.mapClassroomElement(this.classroomData);
            },
            error => {
                console.warn(error);
            }
        )
    }
}
