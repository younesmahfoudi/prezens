import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ProfessorElement} from "../professor-element/professor-element.model";
import {ProfessorService} from "../../../../core/domain/professor/professor.service";

@Component({
    selector: 'prez-professor-delete',
    templateUrl: './professor-delete.component.html',
    styleUrls: ['./professor-delete.component.scss']
})
export class ProfessorDeleteComponent implements OnInit {

    public deleteLoading: boolean = false;

    public errorMessage?: string;
    public deleteMessage?: string;

    constructor(private professorService: ProfessorService,
                @Inject(MAT_DIALOG_DATA) public data: {
                    professorElement: ProfessorElement
                }) { }

    ngOnInit(): void {
    }

    public deleteProfessor(professorUid: number): void {
        if (!professorUid) return;
        this.deleteLoading = true;
        this.professorService.deleteProfessor(professorUid).subscribe(
            () => {
                this.deleteLoading = false;
                this.deleteMessage = 'Professor deleted successfully'
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
