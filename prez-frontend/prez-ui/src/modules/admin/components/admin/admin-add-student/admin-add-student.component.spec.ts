import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddStudentComponent } from './admin-add-student.component';

describe('AdminAddStudentComponent', () => {
  let component: AdminAddStudentComponent;
  let fixture: ComponentFixture<AdminAddStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
