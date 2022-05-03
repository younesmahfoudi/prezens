import {Component, Input, OnInit} from '@angular/core';
import {RegisterService} from "../../../../core/domain/register/register.service";
import {StudentElement} from "../student-element/student-element.model";
import {RegisteredStudent} from "../../../../core/domain/register/register.model";
import {RegisterElementService} from "../../../../register/components/register-element/register-element.service";
import {RegisteredStudentElement} from "../../../../register/components/register-element/register-element.model";
import {ClassroomElement} from "../../../../classroom/components/classroom-element/classroom-element.model";

@Component({
    selector: 'prez-student-history-screen',
    templateUrl: './student-history-screen.component.html',
    styleUrls: ['./student-history-screen.component.scss']
})
export class StudentHistoryScreenComponent implements OnInit {

    @Input() studentElement: StudentElement;
    @Input() classroomElement: ClassroomElement;
    public historyElement: RegisteredStudentElement[] = [];
    private historyData: RegisteredStudent[] = [];

    constructor(private registerService: RegisterService,
                private registerElementsService: RegisterElementService) { }

    ngOnInit(): void {
        this.initHistoryData(this.studentElement.uid)
    }

    private initHistoryData(studentUid: number): void{
        if (!studentUid) return;
        this.registerService.getHistory(studentUid).subscribe(
            history => {
                this.historyData = history;
                this.historyElement = this.registerElementsService.mapRegisteredStudentElements(this.historyData);
            },
            error => {
                console.warn(error);
            }
        )
    }

}
