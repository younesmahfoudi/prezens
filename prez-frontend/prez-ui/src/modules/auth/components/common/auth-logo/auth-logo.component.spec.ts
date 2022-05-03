import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLogoComponent } from './auth-logo.component';

describe('AuthLogoComponent', () => {
  let component: AuthLogoComponent;
  let fixture: ComponentFixture<AuthLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
