import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentScreenComponent } from './student-screen.component';

describe('StudentScreenComponent', () => {
  let component: StudentScreenComponent;
  let fixture: ComponentFixture<StudentScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
