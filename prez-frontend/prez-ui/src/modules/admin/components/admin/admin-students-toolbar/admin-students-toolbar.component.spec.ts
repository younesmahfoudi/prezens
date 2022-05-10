import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminStudentsToolbarComponent} from './admin-students-toolbar.component';

describe('AdminStudentsToolbarComponent', () => {
  let component: AdminStudentsToolbarComponent;
  let fixture: ComponentFixture<AdminStudentsToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminStudentsToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStudentsToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
