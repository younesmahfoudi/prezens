import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../../../core/domain/student/student.service";
import {Student} from "../../../../core/domain/student/student.model";
import {ActivatedRoute} from "@angular/router";
import {StudentElementService} from "../student-element/student-element.service";
import {StudentElement} from "../student-element/student-element.model";
import {AuthService} from "../../../../core/domain/auth/auth.service";
import {ClassroomService} from "../../../../core/domain/classroom/classroom.service";
import {ClassroomElement} from "../../../../classroom/components/classroom-element/classroom-element.model";
import {Classroom} from "../../../../core/domain/classroom/classroom.model";
import {ClassroomElementService} from "../../../../classroom/components/classroom-element/classroom-element.service";

@Component({
    selector: 'prez-student-screen',
    templateUrl: './student-screen.component.html',
    styleUrls: ['./student-screen.component.scss']
})
export class StudentScreenComponent implements OnInit {

    public studentElement?: StudentElement
    public classroomElement?: ClassroomElement;
    public studentLoading: boolean = false;
    public classroomLoading: boolean = false;
    private studentData?: Student;
    private classroomData?: Classroom;

    constructor(
        private authService: AuthService,
        private studentService: StudentService,
        private route: ActivatedRoute,
        private studentElementService: StudentElementService,
        private classroomService: ClassroomService,
        private classroomElementService: ClassroomElementService
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
        this.studentLoading = true;
        this.studentService.getStudent(student_uid).subscribe(
            student => {
                this.studentData = student;
                this.studentElement = this.studentElementService.mapStudentElement(this.studentData);
                this.studentLoading = false;
                this.initClassroomData(this.studentElement.class_uid);
            },
            err =>{
                console.warn(err);
                this.studentLoading = false;
            }
        )
    }

    private initClassroomData(classroomUid?: number): void{
        if (!classroomUid) return;
        this.classroomLoading = true;
        this.classroomService.getClassroom(classroomUid).subscribe(
            classroom => {
                this.classroomData = classroom;
                this.classroomElement = this.classroomElementService.mapClassroomElement(this.classroomData);
                this.classroomLoading = false;
            },
            error => {
                console.warn(error);
                this.classroomLoading = false;
            }
        )
    }
}
