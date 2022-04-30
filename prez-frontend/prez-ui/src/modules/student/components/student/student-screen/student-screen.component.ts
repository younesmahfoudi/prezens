import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../../../core/domain/student/student.service";
import {Student} from "../../../../core/domain/student/student.model";
import {ActivatedRoute} from "@angular/router";
import {StudentElementService} from "../student-element/student-element.service";
import {StudentElement} from "../student-element/student-element.model";
import {AuthService} from "../../../../core/domain/auth/auth.service";
import {LessonElementService} from "../../../../lesson/components/lesson-element/lesson-element.service";
import {LessonService} from "../../../../core/domain/lesson/lesson.service";
import {Lesson} from "../../../../core/domain/lesson/lesson.model";
import {LessonElement} from "../../../../lesson/components/lesson-element/lesson-element.model";

@Component({
    selector: 'prez-student-screen',
    templateUrl: './student-screen.component.html',
    styleUrls: ['./student-screen.component.scss']
})
export class StudentScreenComponent implements OnInit {

    public studentElement?: StudentElement
    private studentData?: Student;

    constructor(
        private authService: AuthService,
        private studentService: StudentService,
        private route: ActivatedRoute,
        private studentElementService: StudentElementService
    ) { }

    ngOnInit(): void {
        this.initData()
    }

    public logout(): void{
        this.authService.logout();
        window.location.reload();
    }

    private initData(): void{
        const student_uid = Number(this.route.snapshot.paramMap.get('id'));
        this.initStudentData(student_uid);
    }

    private initStudentData(student_uid: number): void{
        if (!student_uid) return;
        this.studentService.getStudent(student_uid).subscribe(
            student => {
                this.studentData = student;
                this.studentElement = this.studentElementService.mapStudentElement(this.studentData);
            },
            err =>{
                console.warn(err);
            }
        )
    }
}
