import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../../../core/domain/student/student.service";
import {Student} from "../../../../core/domain/student/student.model";
import {ActivatedRoute} from "@angular/router";
// import {StudentElementService} from "../../../../Student-element/student-element.service";
import {AuthService} from "../../../../core/domain/auth/auth.service";
import {ClassroomService} from "../../../../core/domain/classroom/classroom.service";
import {ClassroomElement} from "../../../../classroom/components/classroom-element/classroom-element.model";
import {Classroom} from "../../../../core/domain/classroom/classroom.model";
import {ClassroomElementService} from "../../../../classroom/components/classroom-element/classroom-element.service";
import {ProfessorElement} from '../professor-element/professor-element.model';
import {ProfessorService} from '../../../../core/domain/professor/professor.service';
import {ProfessorElementService} from '../professor-element/professor-element.service';
import {Professor} from '../../../../core/domain/professor/professor.model';
import {LessonFilter} from "../../../../admin/components/admin/lesson/admin-lesson-toolbar/lesson-filter.model";

@Component({
    selector: 'prez-professor-screen',
    templateUrl: './professor-screen.component.html',
    styleUrls: ['./professor-screen.component.scss']
})
export class ProfessorScreenComponent implements OnInit {

    public professorElement?: ProfessorElement;
    private professorData?: Professor;
    public lessonFilter: LessonFilter = {};

    constructor(
        private authService: AuthService,
        private studentService: StudentService,
        private route: ActivatedRoute,
        // private studentElementService: StudentElementService,
        private classroomService: ClassroomService,
        private classroomElementService: ClassroomElementService,
        private professorService: ProfessorService,
        private professorElementService: ProfessorElementService
    ) {
    }

    ngOnInit(): void {
        this.initData()
    }

    public logout(): void {
        this.authService.logout();
        window.location.reload();
    }

    private initData(): void {
        const professor_uid = Number(this.route.snapshot.paramMap.get('id'));
        this.initProfessorData(professor_uid);

    }

    private initProfessorData(professor_uid: number): void {
        if (!professor_uid) return;
        this.professorService.getProfessor(professor_uid).subscribe(
            professor => {
                this.professorData = professor;
                this.professorElement = this.professorElementService.mapProfessorElement(this.professorData);
                this.lessonFilter.professor = this.professorElement
            },
            err => {
                console.warn(err);
            }
        )
    }
}
