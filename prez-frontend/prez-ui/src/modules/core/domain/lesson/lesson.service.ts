import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Lesson} from "./lesson.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class LessonService {

    constructor(private http: HttpClient) { }

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
}
