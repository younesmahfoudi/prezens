import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Student, StudentCreate} from "./student.model";
import {Observable} from "rxjs";
import {AdminStudentsFilter} from "../../../admin/components/admin/admin-classrooms-screen/admin-students-filter.model";

@Injectable({
    providedIn: 'root'
})
export class StudentService {

    constructor(private http: HttpClient) { }

    public getStudent(student_uid: number): Observable<Student>{
        return this.http.get<Student>(`/api/students/${student_uid}`)
    }

    public getStudents(studentFilter: AdminStudentsFilter): Observable<Student[]>{
        let pathUrl = '/api/students/?'
        pathUrl = studentFilter.classroom ? `/api/classrooms/${studentFilter.classroom.uid}/students ` : pathUrl;
        return this.http.get<Student[]>(`${pathUrl}`)
    }

    public updateStudentClassroom(studentUid: number, classroomUid: number): Observable<Student>{
        return this.http.put<Student>(`/api/students/${studentUid}`,{class_uid:classroomUid});
    }

    public signupStudent(studentCreate: StudentCreate): Observable<any>{
        return this.http.post<any>(`/api/students/signup`, studentCreate);
    }
}
