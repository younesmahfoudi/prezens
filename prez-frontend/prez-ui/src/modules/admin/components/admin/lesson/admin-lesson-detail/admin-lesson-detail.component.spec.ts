import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLessonDetailComponent } from './admin-lesson-detail.component';

describe('AdminLessonDetailComponent', () => {
  let component: AdminLessonDetailComponent;
  let fixture: ComponentFixture<AdminLessonDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLessonDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLessonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
