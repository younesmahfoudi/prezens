import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNotificationsDetailComponent } from './admin-notifications-detail.component';

describe('AdminNotificationsDetailComponent', () => {
  let component: AdminNotificationsDetailComponent;
  let fixture: ComponentFixture<AdminNotificationsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNotificationsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNotificationsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
