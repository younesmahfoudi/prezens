import {Injectable} from '@angular/core';
import {Lesson} from "../../../core/domain/lesson/lesson.model";
import {LessonElement} from "./lesson-element.model";

@Injectable({
    providedIn: 'root'
})
export class LessonElementService {

    public mapLessonElement(lesson: Lesson): LessonElement{
        return{
            description: lesson.description,
            start_at: lesson.start_at,
            end_at: lesson.end_at,
            class_uid: lesson.class_uid,
            professor_name: lesson.professor.last_name + " " + lesson.professor.first_name,
            uid: lesson.uid
        }
    }

    public mapLessonElements(lessons: Lesson[]): LessonElement[]{
        if (!lessons) return [];
        return lessons.map(lesson => this.mapLessonElement(lesson))
    }

}
