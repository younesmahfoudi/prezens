import {Component, Inject, OnInit} from '@angular/core';
import {LessonService} from "../../../../../core/domain/lesson/lesson.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ClassroomElement} from "../../../../../classroom/components/classroom-element/classroom-element.model";
import {
    ProfessorElement
} from "../../../../../professor/components/professor/professor-element/professor-element.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AdminLessonAdd} from "./admin-lesson-add.model";
import {AdminLessonAddService} from "./admin-lesson-add.service";

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
            classroom_uid: new FormControl('', [Validators.required])
        }
    )
    public addLoading: boolean = false;
    public addMessage?: string;

    constructor(private lessonService: LessonService,
                private adminLessonAddService: AdminLessonAddService,
                @Inject(MAT_DIALOG_DATA) public data: {
                    classroomElements: ClassroomElement[],
                    professorElements: ProfessorElement[]
                }) { }

    ngOnInit(): void {
    }

    public addLesson(lesson: AdminLessonAdd): void {
        if (!lesson) return;
        this.addLoading = true;
        this.lessonService.addLesson(this.adminLessonAddService.mapLessonAdd(lesson)).subscribe(
            lesson => {
                console.log(lesson);
                this.addMessage = 'Lesson added successfully'
                this.addLoading = false;
            },
            error => {
                console.warn(error);
                this.addLoading = false;
                this.addMessage = error.error.detail;
            }
        )
    }

}
