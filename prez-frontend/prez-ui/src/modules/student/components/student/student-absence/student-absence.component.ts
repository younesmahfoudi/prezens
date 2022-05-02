import {Component, Input, OnInit} from '@angular/core';
import {ClassroomElement} from "../../../../classroom/components/classroom-element/classroom-element.model";
import {RegisteredStudentElement} from "../../../../register/components/register-element/register-element.model";
import {LessonElement} from "../../../../lesson/components/lesson-element/lesson-element.model";
import {Status} from "../../../../core/domain/register/status.enum";
import {RegisteredStudentUpdate} from "../../../../core/domain/register/register.model";
import {RegisterService} from "../../../../core/domain/register/register.service";

@Component({
    selector: 'prez-student-absence',
    templateUrl: './student-absence.component.html',
    styleUrls: ['./student-absence.component.scss']
})
export class StudentAbsenceComponent implements OnInit {

    @Input() classroomElement: ClassroomElement;
    @Input() registeredStudentElement: RegisteredStudentElement;
    @Input() lessonElement: LessonElement;
    public submitLoading: boolean = false;
    public submitDone: boolean = false;
    public hideSubmit: boolean = true;
    private registeredStudentUpdate: RegisteredStudentUpdate = {};

    constructor(private registerService: RegisterService) { }

    ngOnInit(): void {
    }

    public updateRegisteredStudent(proof: string){
        if (!proof || !this.registeredStudentElement) return;
        this.registeredStudentUpdate.proof = proof;
        this.registeredStudentUpdate.status = Status.Pending;
        this.hideSubmit = false;
    }

    public submit(){
        this.submitLoading = true;
        this.registerService.updateRegisteredStudent(this.registeredStudentElement.uid,this.registeredStudentUpdate).subscribe(
            () =>{
                this.submitLoading = false;
                this.submitDone = true
            },
            error => {
                console.warn(error);
                this.submitLoading = false;
            }
        )
    }

}
