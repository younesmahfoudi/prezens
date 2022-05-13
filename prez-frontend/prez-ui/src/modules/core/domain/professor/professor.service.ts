import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Professor} from "./professor.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  private pathUrl: string = '/api/professors';

  constructor(private http: HttpClient) { }

  public getProfessor(professor_uid: number) : Observable<Professor>{
    return this.http.get<Professor>(`${this.pathUrl}/${professor_uid}`)
  }

    public getProfessors(): Observable<Professor[]>{
        return this.http.get<Professor[]>(`/api/professors/`);
    }

    public signupProfessor(professorCreate: ProfessorCreate): Observable<any>{
        return this.http.post<any>(`/api/professors/signup`, professorCreate);
    }
}
