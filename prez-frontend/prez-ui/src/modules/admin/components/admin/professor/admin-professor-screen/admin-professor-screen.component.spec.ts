import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminProfessorScreenComponent} from './admin-professor-screen.component';

describe('AdminProfessorScreenComponent', () => {
  let component: AdminProfessorScreenComponent;
  let fixture: ComponentFixture<AdminProfessorScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProfessorScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProfessorScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
