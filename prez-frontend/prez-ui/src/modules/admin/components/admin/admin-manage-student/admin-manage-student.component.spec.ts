import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminManageStudentComponent} from './admin-manage-student.component';

describe('AdminManageStudentComponent', () => {
  let component: AdminManageStudentComponent;
  let fixture: ComponentFixture<AdminManageStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminManageStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminManageStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
