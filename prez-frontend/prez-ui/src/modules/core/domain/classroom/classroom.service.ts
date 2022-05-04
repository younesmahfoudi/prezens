import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Classroom} from "./classroom.model";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ClassroomService {

    constructor(private http: HttpClient) { }

    public getClassroom(classroomUid: number): Observable<Classroom>{
        return this.http.get<Classroom>(`/api/classrooms/${classroomUid}`);
    }

    public getClassrooms(): Observable<Classroom[]>{
        return this.http.get<Classroom[]>(`/api/classrooms/`);
    }

}
