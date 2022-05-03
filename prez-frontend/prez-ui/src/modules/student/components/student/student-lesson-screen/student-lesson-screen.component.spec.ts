import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLessonScreenComponent } from './student-lesson-screen.component';

describe('StudentLessonScreenComponent', () => {
  let component: StudentLessonScreenComponent;
  let fixture: ComponentFixture<StudentLessonScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentLessonScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentLessonScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
