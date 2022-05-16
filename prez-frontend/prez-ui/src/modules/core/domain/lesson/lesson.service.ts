import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Lesson, LessonPost} from "./lesson.model";
import {HttpClient} from "@angular/common/http";
import {LessonFilter} from "../../../admin/components/admin/lesson/admin-lesson-toolbar/lesson-filter.model";
import {AdminLessonAdd} from "../../../admin/components/admin/lesson/admin-lesson-add/admin-lesson-add.model";
import {RegisterComponent} from "../../../register/register.component";

@Injectable({
    providedIn: 'root'
})
export class LessonService {

    constructor(private http: HttpClient) { }

    public getLesson(lessonUid: number): Observable<Lesson>{
        return this.http.get<Lesson>(`/api/lessons/${lessonUid}`);
    }

    public getStudentLessons(studentUid: number): Observable<Lesson[]>{
        return this.http.get<Lesson[]>(`/api/students/${studentUid}/lessons`)
    }

    public getClassroomLessons(classroomUid: number): Observable<Lesson[]>{
        return this.http.get<Lesson[]>(`/api/classrooms/${classroomUid}/lessons`);
    }

    public getLessonByRegister(registerUid: number): Observable<Lesson>{
        return this.http.get<Lesson>(`/api/register/${registerUid}/lesson`);
    }

    public getLessons(): Observable<Lesson[]>{
        return this.http.get<Lesson[]>(`/api/lessons/`)
    }

    public getLessonsByProfessor(professorUid: number): Observable<Lesson[]>{
        return this.http.get<Lesson[]>(`/api/professors/${professorUid}/lessons`)
    }

    public getClassroomProfessorLessons(classroomUid: number, professorUid: number): Observable<Lesson[]>{
        return this.http.get<Lesson[]>(`/api/classrooms/${classroomUid}/professors/${professorUid}/lessons`);
    }

    public getLessonFiltered(lessonFilter: LessonFilter): Observable<Lesson[]>{
        if (lessonFilter.classroom && lessonFilter.professor) return this.getClassroomProfessorLessons(lessonFilter.classroom.uid, lessonFilter.professor.uid);
        if (lessonFilter.classroom) return this.getClassroomLessons(lessonFilter.classroom.uid);
        if (lessonFilter.professor) return this.getLessonsByProfessor(lessonFilter.professor.uid);
        //if (lessonFilter.when) return this.getLessonsByDate(lessonFilter.professor.uid ,lessonFilter.when);
        return this.getLessons();
    }

    public getLessonsByDate(professorUid: number, when: string): Observable<Lesson[]>{
        return this.http.get<Lesson[]>(`/api/professors/${professorUid}/lessons/${when}`)
    }

    public deleteLesson(lessonUid: number): Observable<any>{
        return this.http.delete<any>(`/api/lessons/${lessonUid}`);
    }

    public addLesson(lesson: LessonPost): Observable<Lesson>{
        return this.http.post<Lesson>(`/api/lessons/`,lesson);
    }

    public getRegisterByLessonUid(lessonUid?: number):Observable<RegisterComponent>{
        if(!lessonUid) console.warn();
        return this.http.get<RegisterComponent>(`/api/lesson/${lessonUid}/register`);
    }
}
