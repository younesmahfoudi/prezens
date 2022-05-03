import { TestBed } from '@angular/core/testing';

import { IsStudentSignedInGuard } from './is-student-signed-in.guard';

describe('IsStudentSignedInGuard', () => {
  let guard: IsStudentSignedInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsStudentSignedInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
