import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Professor, ProfessorCreate} from "./professor.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class ProfessorService {

    constructor(private http: HttpClient) { }

    public getProfessors(): Observable<Professor[]>{
        return this.http.get<Professor[]>(`/api/professors/`);
    }

    public signupProfessor(professorCreate: ProfessorCreate): Observable<any>{
        return this.http.post<any>(`/api/professors/signup`, professorCreate);
    }
}
