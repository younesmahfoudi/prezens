import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLogoComponent } from './student-logo.component';

describe('StudentLogoComponent', () => {
  let component: StudentLogoComponent;
  let fixture: ComponentFixture<StudentLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
