import { TestBed } from '@angular/core/testing';

import { IsProfSignedInGuard } from './is-prof-signed-in.guard';

describe('IsProfSignedInGuard', () => {
  let guard: IsProfSignedInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsProfSignedInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
