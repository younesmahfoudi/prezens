import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorLessonScreenComponent } from './professor-lesson-screen.component';

describe('ProfessorLessonScreenComponent', () => {
  let component: ProfessorLessonScreenComponent;
  let fixture: ComponentFixture<ProfessorLessonScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorLessonScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorLessonScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
