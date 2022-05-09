import { TestBed } from '@angular/core/testing';

import { AdminLessonAddService } from './admin-lesson-add.service';

describe('AdminLessonAddService', () => {
  let service: AdminLessonAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminLessonAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
