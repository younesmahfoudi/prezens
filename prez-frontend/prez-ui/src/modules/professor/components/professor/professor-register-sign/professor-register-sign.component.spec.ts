import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorRegisterSignComponent } from './professor-register-sign.component';

describe('ProfessorRegisterSignComponent', () => {
  let component: ProfessorRegisterSignComponent;
  let fixture: ComponentFixture<ProfessorRegisterSignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorRegisterSignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorRegisterSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
