import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {StudentElement} from "../../../../student/components/student/student-element/student-element.model";
import {StudentService} from "../../../../core/domain/student/student.service";
import {ClassroomService} from "../../../../core/domain/classroom/classroom.service";
import {ClassroomElement} from "../../../../classroom/components/classroom-element/classroom-element.model";
import {ClassroomElementService} from "../../../../classroom/components/classroom-element/classroom-element.service";
import {Classroom} from "../../../../core/domain/classroom/classroom.model";

@Component({
    selector: 'prez-admin-manage-student',
    templateUrl: './admin-manage-student.component.html',
    styleUrls: ['./admin-manage-student.component.scss']
})
export class AdminManageStudentComponent implements OnInit {

    public classroomElement: ClassroomElement;
    public classroomElements: ClassroomElement[] = [];
    public classroomSelected?: ClassroomElement;
    private classroomData?: Classroom;
    private classroomsData: Classroom[] = [];

    constructor(private studentService: StudentService,
                private classroomService: ClassroomService,
                private classroomElementService: ClassroomElementService,
                @Inject(MAT_DIALOG_DATA) public data: {
                    studentElement: StudentElement
                }) { }

    ngOnInit(): void {
        this.initData();
    }

    public updateStudentClassroom(classroomUid: number){
        if (!classroomUid) return;
        this.studentService.updateStudentClassroom(this.data.studentElement.uid, classroomUid).subscribe(
            student => {
                this.data.studentElement = student;
                this.initClassroomData(this.data.studentElement.class_uid);
                this.classroomSelected = undefined;
            },
            error => {
                console.warn(error);
            }
        )
    }

    private initData(): void{
        this.initClassroomsData();
        this.initClassroomData(this.data.studentElement.class_uid)
    }

    private initClassroomsData(): void{
        this.classroomService.getClassrooms().subscribe(
            classrooms => {
                this.classroomsData = classrooms;
                this.classroomElements = this.classroomElementService.mapClassroomElements(this.classroomsData);
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
