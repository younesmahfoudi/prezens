import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RegisteredStudentElement} from "../../../../register/components/register-element/register-element.model";
import {Status} from "../../../../core/domain/register/status.enum";
import {ClassroomElement} from "../../../../classroom/components/classroom-element/classroom-element.model";
import {MatDialog} from "@angular/material/dialog";
import {StudentHistoryDetailComponent} from "../student-history-detail/student-history-detail.component";

@Component({
    selector: 'prez-student-history-list',
    templateUrl: './student-history-list.component.html',
    styleUrls: ['./student-history-list.component.scss']
})
export class StudentHistoryListComponent implements OnInit {

    @Output() refreshEmitter = new EventEmitter();
    @Input() historyElement?: RegisteredStudentElement[];
    @Input() classroomElement?: ClassroomElement;
    /* private historyDetailData?: RegisteredStudent;

     public step: number = 0;

     setStep(index: number) {
         this.step = index;
     }

     nextStep() {
         this.step++;
     }

     prevStep() {
         this.step--;
     }*/

    constructor(public dialog: MatDialog) {}

    ngOnInit(): void {
    }

    public getPriority(status: Status): string{
        switch(status) {
            case Status.Present: {
                return "green";
            }
            case Status.Absent: {
                return "red";
            }
            case Status.Pending: {
                return "orange";
            }
            case Status.Justified: {
                return "blue";
            }
            case Status.Denied: {
                return "red";
            }
            default: {
                return "grey";
            }
        }
    }

    openDialog(registeredStudentElement: RegisteredStudentElement) {
        const dialogRef = this.dialog.open(
            StudentHistoryDetailComponent,
            {
                data : {
                    registeredStudentElement: registeredStudentElement,
                    classroomElement: this.classroomElement
                }
            });
        dialogRef.afterClosed().subscribe(result => {
            this.refreshEmitter.emit();
            console.log(`Dialog result: ${result}`);
        });
    }

}
