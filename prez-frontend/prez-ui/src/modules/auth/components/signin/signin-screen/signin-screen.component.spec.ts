import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninScreenComponent } from './signin-screen.component';

describe('SigninScreenComponent', () => {
  let component: SigninScreenComponent;
  let fixture: ComponentFixture<SigninScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
