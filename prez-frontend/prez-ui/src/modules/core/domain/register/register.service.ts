import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {RegisteredStudent, RegisteredStudentUpdate} from "./register.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class RegisterService {

    constructor(private http: HttpClient) { }

    public getHistory(studentUid: number): Observable<RegisteredStudent[]>{
        return this.http.get<RegisteredStudent[]>(`/api/students/${studentUid}/history`);
    }

    public updateRegisteredStudent(registeredStudentUid: number, registeredStudentUpdate: RegisteredStudentUpdate): Observable<RegisteredStudent>{
        return this.http.put<RegisteredStudent>(`/api/registeredstudents/${registeredStudentUid}/update`, registeredStudentUpdate);
    }
}
