import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLessonAddComponent } from './admin-lesson-add.component';

describe('AdminLessonAddComponent', () => {
  let component: AdminLessonAddComponent;
  let fixture: ComponentFixture<AdminLessonAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminLessonAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLessonAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
