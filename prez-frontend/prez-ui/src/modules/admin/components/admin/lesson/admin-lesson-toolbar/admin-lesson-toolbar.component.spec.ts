import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLessonToolbarComponent } from './admin-lesson-toolbar.component';

describe('AdminLessonToolbarComponent', () => {
  let component: AdminLessonToolbarComponent;
  let fixture: ComponentFixture<AdminLessonToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLessonToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLessonToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
