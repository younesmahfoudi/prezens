import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorScreenComponent } from './professor-screen.component';

describe('ProfessorScreenComponent', () => {
  let component: ProfessorScreenComponent;
  let fixture: ComponentFixture<ProfessorScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
