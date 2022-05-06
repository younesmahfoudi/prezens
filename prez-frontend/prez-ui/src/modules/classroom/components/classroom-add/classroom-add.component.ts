import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ClassroomService} from "../../../core/domain/classroom/classroom.service";
import {ClassroomAddElement} from "./classroom-add-element.model";

@Component({
    selector: 'prez-classroom-add',
    templateUrl: './classroom-add.component.html',
    styleUrls: ['./classroom-add.component.scss']
})
export class ClassroomAddComponent implements OnInit {

    public classroomForm = new FormGroup({
            promotion : new FormControl('', [Validators.required]),
            description : new FormControl('', [Validators.required])
        }
    )
    public addLoading: boolean = false;
    public addDone: boolean = false;
    public errorMessage: string;

    constructor(private classroomService: ClassroomService) {
    }

    ngOnInit(): void {
    }

    public getErrorMessagePromotion() {

        if (this.classroomForm.controls["promotion"].hasError('required')) {
            return 'You must enter a value';
        }

        return '';
    }

    public getErrorMessageDesc() {
        if (this.classroomForm.controls["description"].hasError('required')) {
            return 'You must enter a value';
        }

        return '';
    }

    public submit(classroomAddElement: ClassroomAddElement) {
        this.addLoading = true;
        this.addDone = false;
        this.classroomService.addClassroom(classroomAddElement).subscribe(
            ()=>{
                this.addLoading = false;
                this.addDone = true
            },
            error => {
                this.addLoading = false;
                this.errorMessage = error.error.detail;
            }
        )
    }

}
