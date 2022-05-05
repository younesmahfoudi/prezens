import { Component, Input, OnInit } from '@angular/core';
import { ClassroomElement } from 'src/modules/classroom/components/classroom-element/classroom-element.model';
import { Classroom } from 'src/modules/core/domain/classroom/classroom.model';
import { Lesson } from 'src/modules/core/domain/lesson/lesson.model';
import { LessonService } from 'src/modules/core/domain/lesson/lesson.service';
import { LessonElement } from 'src/modules/lesson/components/lesson-element/lesson-element.model';
import { LessonElementService } from 'src/modules/lesson/components/lesson-element/lesson-element.service';
import { ProfessorElement } from '../professor-element/professor-element.model';

@Component({
  selector: 'prez-professor-lesson-screen',
  templateUrl: './professor-lesson-screen.component.html',
  styleUrls: ['./professor-lesson-screen.component.scss']
})
export class ProfessorLessonScreenComponent implements OnInit {

  constructor(
    private lessonService: LessonService,
    private lessonElementService: LessonElementService
  ) { }


  @Input() professorElement?: ProfessorElement;
  @Input() classroomElement?: ClassroomElement;
  public lessonElements?: LessonElement[];
  private lessonData?: Lesson[];
  private classroomData?: Classroom;
  
  ngOnInit(): void {
    this.initData();
  }


  private initData(): void{}
}
