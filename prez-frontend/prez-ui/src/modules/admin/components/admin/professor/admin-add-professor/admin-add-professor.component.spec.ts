import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminAddProfessorComponent} from './admin-add-professor.component';

describe('AdminAddProfessorComponent', () => {
  let component: AdminAddProfessorComponent;
  let fixture: ComponentFixture<AdminAddProfessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddProfessorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAddProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
