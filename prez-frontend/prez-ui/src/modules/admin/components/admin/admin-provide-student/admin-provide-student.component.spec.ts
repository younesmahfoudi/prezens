import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProvideStudentComponent } from './admin-provide-student.component';

describe('AdminProvideStudentComponent', () => {
  let component: AdminProvideStudentComponent;
  let fixture: ComponentFixture<AdminProvideStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProvideStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProvideStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
