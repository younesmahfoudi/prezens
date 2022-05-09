import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorHistoryComponent } from './professor-history.component';

describe('ProfessorHistoryComponent', () => {
  let component: ProfessorHistoryComponent;
  let fixture: ComponentFixture<ProfessorHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
