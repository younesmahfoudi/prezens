import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorRegisterScreenComponent } from './professor-register-screen.component';

describe('ProfessorRegisterScreenComponent', () => {
  let component: ProfessorRegisterScreenComponent;
  let fixture: ComponentFixture<ProfessorRegisterScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorRegisterScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorRegisterScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
