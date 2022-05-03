import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentHistoryScreenComponent } from './student-history-screen.component';

describe('StudentHistoryScreenComponent', () => {
  let component: StudentHistoryScreenComponent;
  let fixture: ComponentFixture<StudentHistoryScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentHistoryScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentHistoryScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
