import { TestBed } from '@angular/core/testing';

import { StudentRegisterGuard } from './student-register.guard';

describe('StudentRegisterGuard', () => {
  let guard: StudentRegisterGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StudentRegisterGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
