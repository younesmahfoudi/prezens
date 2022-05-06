import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorLogoComponent } from './professor-logo.component';

describe('ProfessorLogoComponent', () => {
  let component: ProfessorLogoComponent;
  let fixture: ComponentFixture<ProfessorLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
