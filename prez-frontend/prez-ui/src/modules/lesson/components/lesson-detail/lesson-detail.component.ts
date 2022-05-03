import {Component, Input, OnInit} from '@angular/core';
import {LessonElement} from "../lesson-element/lesson-element.model";

@Component({
    selector: 'prez-lesson-detail',
    templateUrl: './lesson-detail.component.html',
    styleUrls: ['./lesson-detail.component.scss']
})
export class LessonDetailComponent implements OnInit {

    @Input() lessonElement: LessonElement;

    constructor() { }

    ngOnInit(): void {
    }
}
