import { Injectable } from '@angular/core';
import {AdminLessonAdd} from "./admin-lesson-add.model";
import {LessonPost} from "../../../../../core/domain/lesson/lesson.model";

@Injectable({
  providedIn: 'root'
})
export class AdminLessonAddService {

  constructor() { }

    public mapLessonAdd(lesson: AdminLessonAdd): LessonPost{
      return {
          description: lesson.description,
          start_at: lesson.start_at.toISOString(),
          end_at: lesson.end_at.toISOString(),
          class_uid: lesson.class_uid,
          professor_uid: lesson.professor_uid
      }
    }
}
