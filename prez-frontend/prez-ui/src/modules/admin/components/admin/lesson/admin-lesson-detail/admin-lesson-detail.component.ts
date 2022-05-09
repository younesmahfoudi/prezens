import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Lesson} from "../../../../../core/domain/lesson/lesson.model";
import {LessonElement} from "../../../../../lesson/components/lesson-element/lesson-element.model";
import {LessonService} from "../../../../../core/domain/lesson/lesson.service";
import {LessonElementService} from "../../../../../lesson/components/lesson-element/lesson-element.service";
import {ClassroomService} from "../../../../../core/domain/classroom/classroom.service";
import {ClassroomElementService} from "../../../../../classroom/components/classroom-element/classroom-element.service";
import {Classroom} from "../../../../../core/domain/classroom/classroom.model";
import {ClassroomElement} from "../../../../../classroom/components/classroom-element/classroom-element.model";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

@Component({
    selector: 'prez-admin-lesson-detail',
    templateUrl: './admin-lesson-detail.component.html',
    styleUrls: ['./admin-lesson-detail.component.scss']
})
export class AdminLessonDetailComponent implements OnInit {

    public lessonElement: LessonElement;
    public classroomElement: ClassroomElement;
    public deleteLoading: boolean = false;
    public deleteMessage?: string;
    public errorMessage?: string;
    private lessonData: Lesson;
    private classroomData: Classroom;

    constructor(private lessonService: LessonService,
                private lessonElementService: LessonElementService,
                private classroomService: ClassroomService,
                private classroomElementService: ClassroomElementService,
                @Inject(MAT_DIALOG_DATA) public data: {
                    lessonUid: number
                }) { }

    ngOnInit(): void {
        this.initData();
    }

    public deleteLesson(): void {
        this.deleteLoading = true;
        this.lessonService.deleteLesson(this.lessonElement.uid).subscribe(
            result => {
                this.deleteLoading = false;
                this.errorMessage = undefined;
                this.deleteMessage = result.detail;
            },
            error => {
                this.deleteMessage = undefined;
                this.errorMessage = error.error.detail;
            }
        )
    }

    public openPDF(): void {
        let DATA: any = document.getElementById('htmlData');
        html2canvas(DATA).then((canvas) => {
            let fileWidth = 208;
            let fileHeight = (canvas.height * fileWidth) / canvas.width;
            const FILEURI = canvas.toDataURL('image/png');
            let PDF = new jsPDF('p', 'mm', 'a4');
            let position = 0;
            PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
            PDF.save(this.classroomElement.promotion+'-register.pdf');
        });
    }

    private initData(): void {
        this.initLessonData(this.data.lessonUid);
    }

    private initLessonData(lessonUid: number){
        if (!lessonUid) return;
        this.lessonService.getLesson(lessonUid).subscribe(
            lesson => {
                this.lessonData = lesson;
                this.lessonElement = this.lessonElementService.mapLessonElement(this.lessonData);
                this.iniClassroomData(this.lessonElement.class_uid);
            },
            error => {
                console.warn(error);
            }
        )
    }

    private iniClassroomData(classroomUid: number): void{
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
