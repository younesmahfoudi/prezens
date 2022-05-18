import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorRegisterCodeComponent } from './professor-register-code.component';

describe('ProfessorRegisterCodeComponent', () => {
  let component: ProfessorRegisterCodeComponent;
  let fixture: ComponentFixture<ProfessorRegisterCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorRegisterCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorRegisterCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
