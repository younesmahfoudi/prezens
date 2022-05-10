import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminProvideProfessorComponent} from './admin-provide-professor.component';

describe('AdminProvideProfessorComponent', () => {
  let component: AdminProvideProfessorComponent;
  let fixture: ComponentFixture<AdminProvideProfessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProvideProfessorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProvideProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
