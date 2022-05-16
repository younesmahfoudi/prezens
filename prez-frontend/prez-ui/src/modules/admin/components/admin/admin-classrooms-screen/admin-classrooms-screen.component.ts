import {AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {LessonService} from "../../../../core/domain/lesson/lesson.service";
import {LessonElementService} from "../../../../lesson/components/lesson-element/lesson-element.service";
import {StudentService} from "../../../../core/domain/student/student.service";
import {StudentElementService} from "../../../../student/components/student/student-element/student-element.service";
import {Student} from "../../../../core/domain/student/student.model";
import {StudentElement} from "../../../../student/components/student/student-element/student-element.model";
import {MatPaginator} from "@angular/material/paginator";
import {AdminStudentsFilter} from "./admin-students-filter.model";
import {MatDialog} from "@angular/material/dialog";
import {AdminManageStudentComponent} from "../admin-manage-student/admin-manage-student.component";
import {ClassroomElement} from "../../../../classroom/components/classroom-element/classroom-element.model";
import {ProfessorElement} from "../../../../professor/components/professor/professor-element/professor-element.model";
import {
    ProfessorDeleteComponent
} from "../../../../professor/components/professor/professor-delete/professor-delete.component";
import {AdminDeleteStudentComponent} from "../admin-delete-student/admin-delete-student.component";

@Component({
    selector: 'prez-admin-classrooms-screen',
    templateUrl: './admin-classrooms-screen.component.html',
    styleUrls: ['./admin-classrooms-screen.component.scss']
})
export class AdminClassroomsScreenComponent implements OnInit, AfterViewInit {

    @ViewChild(MatPaginator) paginator?: MatPaginator;
    @Output() classroomEmitter = new EventEmitter<ClassroomElement>()

    public studentElements: StudentElement[];
    public studentsFilter: AdminStudentsFilter = {}
    public isLoadingResults: boolean = false;

    public isRateLimitReached = false;
    private studentsData: Student[] = [];

    constructor(private lessonService: LessonService,
                private lessonElementService: LessonElementService,
                private studentService: StudentService,
                private studentElementService: StudentElementService,
                public dialog: MatDialog) { }

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

    public openStudentConfigDialog(studentElement: StudentElement) {
        if (!studentElement) return;
        const dialogRef = this.dialog.open(
            AdminManageStudentComponent,
            {
                data : {
                    studentElement: studentElement
                }
            });
        dialogRef.afterClosed().subscribe(result => {
            this.initStudentsData({})
            console.log(`Dialog result: ${result}`);
        });
    }

    public openDeleteDialog(studentElement: StudentElement): void {
        const dialogRef = this.dialog.open(AdminDeleteStudentComponent, {
            data: {
                studentElement: studentElement
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('Redirect vers register screen');
            this.initData();
        });
    }

    public emitClassroom(classroomElement: ClassroomElement): void {
        this.classroomEmitter.emit(classroomElement);
    }

    private initData(): void{
        this.initStudentsData(this.studentsFilter);
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
