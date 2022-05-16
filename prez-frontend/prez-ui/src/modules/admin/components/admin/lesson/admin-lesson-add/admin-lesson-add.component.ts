import {Component, Inject, OnInit} from '@angular/core';
import {LessonService} from "../../../../../core/domain/lesson/lesson.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ClassroomElement} from "../../../../../classroom/components/classroom-element/classroom-element.model";
import {
    ProfessorElement
} from "../../../../../professor/components/professor/professor-element/professor-element.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LessonPost} from "../../../../../core/domain/lesson/lesson.model";

@Component({
    selector: 'prez-admin-lesson-add',
    templateUrl: './admin-lesson-add.component.html',
    styleUrls: ['./admin-lesson-add.component.scss']
})
export class AdminLessonAddComponent implements OnInit {

    public lessonForm = new FormGroup({
            description: new FormControl('', [Validators.required]),
            start_at: new FormControl('', [Validators.required]),
            end_at: new FormControl('', [Validators.required]),
            professor_uid: new FormControl('', [Validators.required]),
            class_uid: new FormControl('', [Validators.required])
        }
    )
    public addLoading: boolean = false;
    public addMessage?: string;
    public errorMessage?: string;

    constructor(private lessonService: LessonService,
                @Inject(MAT_DIALOG_DATA) public data: {
                    classroomElements: ClassroomElement[],
                    professorElements: ProfessorElement[]
                }) { }

    ngOnInit(): void {
    }

    public addLesson(lesson: LessonPost): void {
        if (!lesson) return;
        this.addLoading = true;
        this.lessonService.addLesson(lesson).subscribe(
            () => {
                this.addMessage = 'Lesson successfully added'
                this.addLoading = false;
                this.errorMessage = undefined;
            },
            error => {
                this.addLoading = false;
                this.errorMessage = error.error.detail;
                this.addMessage = undefined;
            }
        )
    }

}
