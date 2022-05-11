import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterStudentListComponent } from './register-student-list.component';

describe('RegisterStudentListComponent', () => {
  let component: RegisterStudentListComponent;
  let fixture: ComponentFixture<RegisterStudentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterStudentListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterStudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
