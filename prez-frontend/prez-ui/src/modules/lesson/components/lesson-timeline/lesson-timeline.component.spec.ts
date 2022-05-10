import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LessonTimelineComponent} from './lesson-timeline.component';

describe('LessonTimelineComponent', () => {
  let component: LessonTimelineComponent;
  let fixture: ComponentFixture<LessonTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
