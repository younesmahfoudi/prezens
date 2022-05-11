import {Injectable} from '@angular/core';
import {Lesson} from "../../../core/domain/lesson/lesson.model";
import {LessonElement} from "./lesson-element.model";
import {RegisterElementService} from "../../../register/components/register-element/register-element.service";

@Injectable({
    providedIn: 'root'
})
export class LessonElementService {

    constructor(private registerElementService: RegisterElementService) {
    }

    public mapLessonElement(lesson: Lesson): LessonElement{
        return{
            description: lesson.description,
            start_at: lesson.start_at,
            end_at: lesson.end_at,
            class_uid: lesson.class_uid,
            professor_name: lesson.professor.last_name + " " + lesson.professor.first_name,
            uid: lesson.uid,
            register: this.registerElementService.mapRegisterElement(lesson.lesson_register)
        }
    }

    public mapLessonElements(lessons: Lesson[]): LessonElement[]{
        if (!lessons) return [];
        return lessons.map(lesson => this.mapLessonElement(lesson))
    }

}
