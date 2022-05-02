import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentHistoryListComponent } from './student-history-list.component';

describe('StudentHistoryListComponent', () => {
  let component: StudentHistoryListComponent;
  let fixture: ComponentFixture<StudentHistoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentHistoryListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentHistoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
