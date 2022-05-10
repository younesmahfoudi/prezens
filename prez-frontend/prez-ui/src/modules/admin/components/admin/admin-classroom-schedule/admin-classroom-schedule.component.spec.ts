import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminClassroomScheduleComponent} from './admin-classroom-schedule.component';

describe('AdminClassroomScheduleComponent', () => {
  let component: AdminClassroomScheduleComponent;
  let fixture: ComponentFixture<AdminClassroomScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminClassroomScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminClassroomScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
