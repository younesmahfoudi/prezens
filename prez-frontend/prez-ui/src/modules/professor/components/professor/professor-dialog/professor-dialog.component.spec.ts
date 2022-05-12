import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorDialogComponent } from './professor-dialog.component';

describe('ProfessorDialogComponent', () => {
  let component: ProfessorDialogComponent;
  let fixture: ComponentFixture<ProfessorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
