import {TestBed} from '@angular/core/testing';

import {IsAdminSignedInGuard} from './is-admin-signed-in.guard';

describe('IsAdminSignedInGuard', () => {
  let guard: IsAdminSignedInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsAdminSignedInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
