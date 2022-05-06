import { TestBed } from '@angular/core/testing';

import { ProfessorElementService } from './professor-element.service';

describe('ProfessorElementService', () => {
  let service: ProfessorElementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfessorElementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
