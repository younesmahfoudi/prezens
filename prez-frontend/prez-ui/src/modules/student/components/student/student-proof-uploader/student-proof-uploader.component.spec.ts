import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProofUploaderComponent } from './student-proof-uploader.component';

describe('StudentProofUploaderComponent', () => {
  let component: StudentProofUploaderComponent;
  let fixture: ComponentFixture<StudentProofUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentProofUploaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentProofUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
