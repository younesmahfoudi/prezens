import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorGridComponent } from './professor-grid.component';

describe('ProfessorGridComponent', () => {
  let component: ProfessorGridComponent;
  let fixture: ComponentFixture<ProfessorGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
