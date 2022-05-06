import {Component, OnInit} from '@angular/core';
import {ProfessorService} from "../../../../../core/domain/professor/professor.service";
import {
    ProfessorElementService
} from "../../../../../professor/components/professor/professor-element/professor-element.service";
import {Professor} from "../../../../../core/domain/professor/professor.model";
import {
    ProfessorElement
} from "../../../../../professor/components/professor/professor-element/professor-element.model";
import {MatDialog} from "@angular/material/dialog";
import {AdminProfessorScheduleComponent} from "../admin-professor-schedule/admin-professor-schedule.component";

@Component({
    selector: 'prez-admin-professor-screen',
    templateUrl: './admin-professor-screen.component.html',
    styleUrls: ['./admin-professor-screen.component.scss']
})
export class AdminProfessorScreenComponent implements OnInit {

    public professorElements?: ProfessorElement[];
    private professorsData?: Professor[];

    constructor(private professorService: ProfessorService,
                private professorElementService: ProfessorElementService,
                public dialog: MatDialog) { }

    ngOnInit(): void {
        this.initData();
    }

    public openProfessorScheduleDialog(professorElement: ProfessorElement) {
        if (!professorElement) return;
        const dialogRef = this.dialog.open(
            AdminProfessorScheduleComponent,
            {
                data : {
                    professorElement: professorElement
                }
            });
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }

    private initData(): void {
        this.initProfessorsData();
    }

    private initProfessorsData(): void{
        this.professorService.getProfessors().subscribe(
            professors => {
                this.professorsData = professors;
                this.professorElements = this.professorElementService.mapProfessorElements(this.professorsData);
            },
            error => {
                console.warn(error);
            }
        )
    }

}
