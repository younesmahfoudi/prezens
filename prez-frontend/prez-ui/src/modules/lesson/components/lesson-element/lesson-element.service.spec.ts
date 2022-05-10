import {TestBed} from '@angular/core/testing';

import {LessonElementService} from './lesson-element.service';

describe('LessonElementService', () => {
  let service: LessonElementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LessonElementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
