import { TestBed } from '@angular/core/testing';

import { ClassroomElementService } from './classroom-element.service';

describe('ClassroomElementService', () => {
  let service: ClassroomElementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassroomElementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
