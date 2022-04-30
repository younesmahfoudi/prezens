import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Student} from "./student.model";
import {Observable} from "rxjs";
import {Lesson} from "../lesson/lesson.model";

@Injectable({
    providedIn: 'root'
})
export class StudentService {

    private pathUrl: string =  '/api/students';

    constructor(private http: HttpClient) { }

    public getStudent(student_uid: number): Observable<Student>{
        return this.http.get<Student>(`${this.pathUrl}/${student_uid}`)
    }
}
