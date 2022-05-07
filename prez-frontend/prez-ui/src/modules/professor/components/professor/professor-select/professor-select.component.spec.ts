import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorSelectComponent } from './professor-select.component';

describe('ProfessorSelectComponent', () => {
  let component: ProfessorSelectComponent;
  let fixture: ComponentFixture<ProfessorSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
