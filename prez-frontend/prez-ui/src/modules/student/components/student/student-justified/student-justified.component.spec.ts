import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentJustifiedComponent } from './student-justified.component';

describe('StudentJustifiedComponent', () => {
  let component: StudentJustifiedComponent;
  let fixture: ComponentFixture<StudentJustifiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentJustifiedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentJustifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
