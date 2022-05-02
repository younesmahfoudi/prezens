import {Component, Inject, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {RegisteredStudentElement} from "../../../../register/components/register-element/register-element.model";
import {ClassroomElement} from "../../../../classroom/components/classroom-element/classroom-element.model";
import {LessonService} from "../../../../core/domain/lesson/lesson.service";
import {LessonElementService} from "../../../../lesson/components/lesson-element/lesson-element.service";
import {Lesson} from "../../../../core/domain/lesson/lesson.model";
import {LessonElement} from "../../../../lesson/components/lesson-element/lesson-element.model";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Status} from "../../../../core/domain/register/status.enum";

@Component({
    selector: 'prez-student-history-detail',
    templateUrl: './student-history-detail.component.html',
    styleUrls: ['./student-history-detail.component.scss']
})
export class StudentHistoryDetailComponent implements OnInit, OnChanges {

    /*@Input() registeredStudentElement?: RegisteredStudentElement;*/
    /*@Input() classroomElement?: ClassroomElement;*/
    public lessonElement: LessonElement;
    private lessonData: Lesson;

    constructor(private lessonService: LessonService,
                private lessonElementService: LessonElementService,
                @Inject(MAT_DIALOG_DATA) public data: {
                    registeredStudentElement: RegisteredStudentElement,
                    classroomElement: ClassroomElement
                }) {
    }

    ngOnInit(): void {
        this.initLessonData(this.data.registeredStudentElement.lesson_register_uid);
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes["registeredStudentElement"] && changes["registeredStudentElement"].isFirstChange()){
            debugger;
            this.initLessonData(this.data.registeredStudentElement.lesson_register_uid);
        }
    }

    public studentIsAbsent(registeredStudentElement: RegisteredStudentElement): boolean{
        return ( registeredStudentElement.status ==  Status.Absent);
    }

    public studentIsPresent(registeredStudentElement: RegisteredStudentElement): boolean{
        return ( registeredStudentElement.status ==  Status.Present);
    }

    public studentIsJustified(registeredStudentElement: RegisteredStudentElement): boolean{
        return ( registeredStudentElement.status ==  Status.Justified);
    }

    public studentIsPending(registeredStudentElement: RegisteredStudentElement): boolean{
        return ( registeredStudentElement.status ==  Status.Pending);
    }

    public studentIsDenied(registeredStudentElement: RegisteredStudentElement): boolean{
        return ( registeredStudentElement.status ==  Status.Denied);
    }

    private initLessonData(lessonUid?: number): void{
        if (!lessonUid) return;
        this.lessonService.getLessonByRegister(lessonUid).subscribe(
            lesson =>{
                this.lessonData = lesson;
                this.lessonElement = this.lessonElementService.mapLessonElement(this.lessonData);
            },
            error =>{
                console.warn(error);
            }
        )
    }
}
