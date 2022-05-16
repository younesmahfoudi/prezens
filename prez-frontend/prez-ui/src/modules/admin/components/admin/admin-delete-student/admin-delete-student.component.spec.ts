import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeleteStudentComponent } from './admin-delete-student.component';

describe('AdminDeleteStudentComponent', () => {
  let component: AdminDeleteStudentComponent;
  let fixture: ComponentFixture<AdminDeleteStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDeleteStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeleteStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
