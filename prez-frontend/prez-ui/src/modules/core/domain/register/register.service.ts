import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Register, RegisteredStudent, RegisteredStudentUpdate} from "./register.model";
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

    public getStudentNotifications(studentUid: number): Observable<RegisteredStudent[]>{
        return this.http.get<RegisteredStudent[]>(`/api/students/${studentUid}/notifications`);
    }

    public getAdminNotifications(): Observable<RegisteredStudent[]>{
        return this.http.get<RegisteredStudent[]>(`/api/admins/notifications/`);
    }

    public getRegister(registerUid: number): Observable<Register>{
        return this.http.get<Register>(`/api/register/${registerUid}`);
    }

    public updateRegisteredStudentStatus(registerUid: number, studentUid: number, signature: any): Observable<any>{
        return this.http.post<any>(`/api/students/${studentUid}/register/${registerUid}`, signature);
    }
}
