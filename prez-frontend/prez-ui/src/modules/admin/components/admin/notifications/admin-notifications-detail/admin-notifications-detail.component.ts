import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {
    RegisteredStudentElement,
    RegisterElement
} from "../../../../../register/components/register-element/register-element.model";
import {ClassroomElement} from "../../../../../classroom/components/classroom-element/classroom-element.model";
import {Classroom} from "../../../../../core/domain/classroom/classroom.model";
import {ClassroomService} from "../../../../../core/domain/classroom/classroom.service";
import {ClassroomElementService} from "../../../../../classroom/components/classroom-element/classroom-element.service";
import {LessonService} from "../../../../../core/domain/lesson/lesson.service";
import {LessonElementService} from "../../../../../lesson/components/lesson-element/lesson-element.service";
import {Lesson} from "../../../../../core/domain/lesson/lesson.model";
import {LessonElement} from "../../../../../lesson/components/lesson-element/lesson-element.model";
import {RegisterService} from "../../../../../core/domain/register/register.service";
import {RegisterElementService} from "../../../../../register/components/register-element/register-element.service";
import {Register} from "../../../../../core/domain/register/register.model";
import {Status} from "../../../../../core/domain/register/status.enum";


@Component({
    selector: 'prez-admin-notifications-detail',
    templateUrl: './admin-notifications-detail.component.html',
    styleUrls: ['./admin-notifications-detail.component.scss']
})
export class AdminNotificationsDetailComponent implements OnInit {

    public classroomElement: ClassroomElement;
    public lessonElement: LessonElement;
    public registerElement: RegisterElement;
    public acceptMessage?: string;
    public refuseMessage?: string;
    public errorMessage?: string;
    private classroomData: Classroom;
    private lessonData: Lesson;
    private registerData: Register;

    constructor(private classroomService: ClassroomService,
                private classroomElementService: ClassroomElementService,
                private lessonService: LessonService,
                private lessonElementService: LessonElementService,
                private registerService: RegisterService,
                private registerElementService: RegisterElementService,
                @Inject(MAT_DIALOG_DATA) public data: {
                    registeredStudentElement: RegisteredStudentElement,
                })  {
    }


    ngOnInit(): void {
        this.initData();
    }

    public downloadPDF(pdf: string) {
        const linkSource = `${pdf}`;
        const downloadLink = document.createElement("a");
        const fileName = this.data.registeredStudentElement.student.last_name + ".pdf";
        downloadLink.href = linkSource;
        downloadLink.download = fileName;
        downloadLink.click();}

    public acceptProof(): void {
        this.registerService.updateRegisteredStudent(this.data.registeredStudentElement.uid, {status: Status.Justified}).subscribe(
            registeredStudent => {
                this.acceptMessage = 'justified'
                this.refuseMessage = undefined;
                this.errorMessage = undefined;
            },
            error => {
                this.errorMessage = error.error.detail;
            }
        )
    }

    public refuseProof(): void {
        this.registerService.updateRegisteredStudent(this.data.registeredStudentElement.uid, {status: Status.Denied}).subscribe(
            registeredStudent => {
                this.refuseMessage = 'Refused';
                this.acceptMessage = undefined;
                this.errorMessage = undefined;
            },
            error => {
                this.errorMessage = error.error.detail;
            }
        )
    }

    private initData(): void {
        this.initClassroomData(this.data.registeredStudentElement.student.class_uid);
        this.initRegisterData(this.data.registeredStudentElement.lesson_register_uid);
    }

    private initClassroomData(classroomUid?: number): void {
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

    private initLessonData(lessonUid?: number): void {
        if (!lessonUid) return;
        this.lessonService.getLesson(lessonUid).subscribe(
            lesson => {
                this.lessonData = lesson;
                this.lessonElement = this.lessonElementService.mapLessonElement(lesson);
            },
            error => {
                console.warn(error);
            }
        )
    }

    private initRegisterData(registerUid?: number): void {
        if (!registerUid) return;
        this.registerService.getRegister(registerUid).subscribe(
            register => {
                this.registerData = register;
                this.registerElement = this.registerElementService.mapRegisterElement(this.registerData);
                this.initLessonData(this.registerElement.lesson_uid);
            },
            error => {
                console.warn(error);
            }
        )
    }

}
