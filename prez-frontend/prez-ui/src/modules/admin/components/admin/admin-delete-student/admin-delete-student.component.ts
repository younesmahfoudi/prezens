import {Component, Inject, OnInit} from '@angular/core';
import {ProfessorService} from "../../../../core/domain/professor/professor.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ProfessorElement} from "../../../../professor/components/professor/professor-element/professor-element.model";
import {StudentService} from "../../../../core/domain/student/student.service";
import {StudentElement} from "../../../../student/components/student/student-element/student-element.model";

@Component({
  selector: 'prez-admin-delete-student',
  templateUrl: './admin-delete-student.component.html',
  styleUrls: ['./admin-delete-student.component.scss']
})
export class AdminDeleteStudentComponent implements OnInit {

    public deleteLoading: boolean = false;

    public errorMessage?: string;
    public deleteMessage?: string;

    constructor(private studentService: StudentService,
                @Inject(MAT_DIALOG_DATA) public data: {
                    studentElement: StudentElement
                }) { }

    ngOnInit(): void {
    }

    public deleteStudent(studentUid: number): void {
        if (!studentUid) return;
        this.deleteLoading = true;
        this.studentService.deleteStudent(studentUid).subscribe(
            () => {
                this.deleteLoading = false;
                this.deleteMessage = 'Student deleted successfully'
                this.errorMessage = undefined;
            },
            error => {
                this.deleteLoading = false;
                this.errorMessage = error.error.detail;
                this.deleteMessage = undefined;
            }
        )
    }

}
