import { Component, Input, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { ClassroomElement } from 'src/modules/classroom/components/classroom-element/classroom-element.model';
import { Classroom } from 'src/modules/core/domain/classroom/classroom.model';
import { ClassroomService } from 'src/modules/core/domain/classroom/classroom.service';
import { Lesson } from 'src/modules/core/domain/lesson/lesson.model';
import { LessonService } from 'src/modules/core/domain/lesson/lesson.service';
import { LessonElement } from 'src/modules/lesson/components/lesson-element/lesson-element.model';
import { LessonElementService } from 'src/modules/lesson/components/lesson-element/lesson-element.service';
import { ProfessorElement } from '../professor-element/professor-element.model';

@Component({
  selector: 'prez-professor-history',
  templateUrl: './professor-history.component.html',
  styleUrls: ['./professor-history.component.scss']
})
export class ProfessorHistoryComponent implements OnInit {

  constructor(
    private lessonService: LessonService,
    private lessonElementService: LessonElementService,
    private classroomService: ClassroomService
  ) { }


  @Input() professorElement?: ProfessorElement;
  // @Input() classroomElement?: ClassroomElement;
  public lessonElements?: LessonElement[];
  private lessonData?: Lesson[];
  
  
  ngOnInit(): void {
    this.initData();
  }


  private initData(): void{
    this.initLessonData(this.professorElement?.uid);
  }

  private initLessonData(professorUid?: number): void{
    if (!professorUid) return;
    this.lessonService.getLessonByProfessor(professorUid).subscribe(
      lessons => {
        this.lessonData = lessons;
        this.lessonElements = this.lessonElementService.mapLessonElements(this.lessonData);
      },
      error => {
        console.warn(error);
      }
    )
  }

  private getClassroomByUid(classroomUid: number): void{
    this.classroomService.getClassroom(classroomUid).subscribe(
      classroom => {
        return classroom.promotion
      }
    )

  }
}
