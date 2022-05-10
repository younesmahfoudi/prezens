import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorFilterToolbarComponent } from './professor-filter-toolbar.component';

describe('ProfessorFilterToolbarComponent', () => {
  let component: ProfessorFilterToolbarComponent;
  let fixture: ComponentFixture<ProfessorFilterToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorFilterToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorFilterToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
