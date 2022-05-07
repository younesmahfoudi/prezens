import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Professor} from "./professor.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class ProfessorService {

    constructor(private http: HttpClient) { }

    public getProfessors(): Observable<Professor[]>{
        return this.http.get<Professor[]>(`/api/professors/`);
    }
}
