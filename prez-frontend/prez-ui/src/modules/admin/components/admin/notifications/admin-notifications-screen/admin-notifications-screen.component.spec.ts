import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNotificationsScreenComponent } from './admin-notifications-screen.component';

describe('AdminNotificationsScreenComponent', () => {
  let component: AdminNotificationsScreenComponent;
  let fixture: ComponentFixture<AdminNotificationsScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNotificationsScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNotificationsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
