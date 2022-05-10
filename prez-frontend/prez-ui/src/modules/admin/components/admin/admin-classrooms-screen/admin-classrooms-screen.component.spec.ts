import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminClassroomsScreenComponent} from './admin-classrooms-screen.component';

describe('AdminClassroomsScreenComponent', () => {
  let component: AdminClassroomsScreenComponent;
  let fixture: ComponentFixture<AdminClassroomsScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminClassroomsScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminClassroomsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
