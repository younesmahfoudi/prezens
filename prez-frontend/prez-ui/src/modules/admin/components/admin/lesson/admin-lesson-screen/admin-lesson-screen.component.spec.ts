import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLessonScreenComponent } from './admin-lesson-screen.component';

describe('AdminLessonScreenComponent', () => {
  let component: AdminLessonScreenComponent;
  let fixture: ComponentFixture<AdminLessonScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLessonScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLessonScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
