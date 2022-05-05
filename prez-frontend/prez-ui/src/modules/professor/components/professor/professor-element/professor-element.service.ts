import { Injectable } from '@angular/core';
import { Professor } from 'src/modules/core/domain/professor/professor.model';
import { ProfessorElement } from './professor-element.model';

@Injectable({
  providedIn: 'root'
})
export class ProfessorElementService {

  constructor() { }

  public mapProfessorElement(professor : Professor) : ProfessorElement{
    return {
      email : professor.email,
      first_name : professor.first_name,
      last_name : professor.last_name,
      uid : professor.uid
    }
  }

  public mapProfessorElements(professors: Professor[]): ProfessorElement[]{
    if(!professors) return [];
    return professors.map(professor => this.mapProfessorElement(professor));
  }
}
