import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentNotificationScreenComponent } from './student-notification-screen.component';

describe('StudentNotificationScreenComponent', () => {
  let component: StudentNotificationScreenComponent;
  let fixture: ComponentFixture<StudentNotificationScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentNotificationScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentNotificationScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
