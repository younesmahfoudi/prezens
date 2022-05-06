import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddClassroomComponent } from './admin-add-classroom.component';

describe('AdminAddClassroomComponent', () => {
  let component: AdminAddClassroomComponent;
  let fixture: ComponentFixture<AdminAddClassroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddClassroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddClassroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
