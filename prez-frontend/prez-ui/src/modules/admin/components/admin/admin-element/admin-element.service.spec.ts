import { TestBed } from '@angular/core/testing';

import { AdminElementService } from './admin-element.service';

describe('AdminElementService', () => {
  let service: AdminElementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminElementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
