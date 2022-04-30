import { TestBed } from '@angular/core/testing';

import { StudentElementService } from './student-element.service';

describe('StudentElementService', () => {
  let service: StudentElementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentElementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
