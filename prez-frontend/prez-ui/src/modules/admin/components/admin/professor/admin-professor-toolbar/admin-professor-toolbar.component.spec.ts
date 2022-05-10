import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminProfessorToolbarComponent} from './admin-professor-toolbar.component';

describe('AdminProfessorToolbarComponent', () => {
  let component: AdminProfessorToolbarComponent;
  let fixture: ComponentFixture<AdminProfessorToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProfessorToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProfessorToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
