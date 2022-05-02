import { TestBed } from '@angular/core/testing';

import { RegisterElementService } from './register-element.service';

describe('RegisterElementService', () => {
  let service: RegisterElementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterElementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
