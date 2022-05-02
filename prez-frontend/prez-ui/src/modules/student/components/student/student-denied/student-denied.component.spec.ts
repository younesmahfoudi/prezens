import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDeniedComponent } from './student-denied.component';

describe('StudentDeniedComponent', () => {
  let component: StudentDeniedComponent;
  let fixture: ComponentFixture<StudentDeniedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDeniedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDeniedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
