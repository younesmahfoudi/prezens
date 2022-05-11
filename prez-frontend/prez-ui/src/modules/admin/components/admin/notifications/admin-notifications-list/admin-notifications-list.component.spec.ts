import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNotificationsListComponent } from './admin-notifications-list.component';

describe('AdminNotificationsListComponent', () => {
  let component: AdminNotificationsListComponent;
  let fixture: ComponentFixture<AdminNotificationsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNotificationsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNotificationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
