import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProfessorScheduleComponent } from './admin-professor-schedule.component';

describe('AdminProfessorScheduleComponent', () => {
  let component: AdminProfessorScheduleComponent;
  let fixture: ComponentFixture<AdminProfessorScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProfessorScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProfessorScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
