import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {LessonService} from "../../../../core/domain/lesson/lesson.service";
import {LessonElementService} from "../../../../lesson/components/lesson-element/lesson-element.service";
import {LessonElement} from "../../../../lesson/components/lesson-element/lesson-element.model";
import {Lesson} from "../../../../core/domain/lesson/lesson.model";
import {StudentService} from "../../../../core/domain/student/student.service";
import {StudentElementService} from "../../../../student/components/student/student-element/student-element.service";
import {Student} from "../../../../core/domain/student/student.model";
import {StudentElement} from "../../../../student/components/student/student-element/student-element.model";
import {MatPaginator} from "@angular/material/paginator";
import {AdminStudentsFilter} from "./admin-students-filter.model";

@Component({
    selector: 'prez-admin-classrooms-screen',
    templateUrl: './admin-classrooms-screen.component.html',
    styleUrls: ['./admin-classrooms-screen.component.scss']
})
export class AdminClassroomsScreenComponent implements OnInit, AfterViewInit {

    public lessonElements: LessonElement[];
    public studentElements: StudentElement[];
    public studentsFilter: AdminStudentsFilter = {}

    isLoadingResults: boolean = false;
    isRateLimitReached = false;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    private lessonsData: Lesson[] = [];
    private studentsData: Student[] = [];

    constructor(private lessonService: LessonService,
                private lessonElementService: LessonElementService,
                private studentService: StudentService,
                private studentElementService: StudentElementService) { }

    ngOnInit(): void {
        this.initData();
    }

    ngAfterViewInit() {
        this.initStudentsData(this.studentsFilter);
    }

    public setStudentsFilter(studentsFilter: AdminStudentsFilter): void{
        this.studentsFilter = studentsFilter;
        this.initStudentsData(this.studentsFilter);
    }

    private initData(): void{
        this.initLessonsData();
        this.initStudentsData(this.studentsFilter);
    }

    private initLessonsData(): void{
        this.lessonService.getLessons().subscribe(
            lessons => {
                this.lessonsData = lessons;
                this.lessonElements = this.lessonElementService.mapLessonElements(this.lessonsData);
            },
            error => {
                console.warn(error);
            }
        )
    }

    private initStudentsData(studentFilter: AdminStudentsFilter): void{
        if (!studentFilter) return;
        this.isLoadingResults = true;
        this.studentService.getStudents(studentFilter).subscribe(
            students =>{
                this.studentsData = students;
                this.studentElements = this.studentElementService.mapStudentElements(this.studentsData);
                this.isLoadingResults = false;
                this.isRateLimitReached = this.studentElements === [];
            },
            error => {
                this.isLoadingResults = false;
                console.warn(error);
            }
        )
    }

}
