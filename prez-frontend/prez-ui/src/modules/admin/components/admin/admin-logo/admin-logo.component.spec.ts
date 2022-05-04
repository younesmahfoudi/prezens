import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLogoComponent } from './admin-logo.component';

describe('AdminLogoComponent', () => {
  let component: AdminLogoComponent;
  let fixture: ComponentFixture<AdminLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
