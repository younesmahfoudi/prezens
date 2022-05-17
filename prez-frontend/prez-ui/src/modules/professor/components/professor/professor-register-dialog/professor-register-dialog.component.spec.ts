import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorRegisterDialogComponent } from './professor-register-dialog.component';

describe('ProfessorRegisterDialogComponent', () => {
  let component: ProfessorRegisterDialogComponent;
  let fixture: ComponentFixture<ProfessorRegisterDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorRegisterDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorRegisterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
