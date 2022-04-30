import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {LessonElement} from "../lesson-element/lesson-element.model";

@Component({
    selector: 'prez-lesson-timeline',
    templateUrl: './lesson-timeline.component.html',
    styleUrls: ['./lesson-timeline.component.scss']
})
export class LessonTimelineComponent implements OnInit {

    @Input() lessonElements?: LessonElement[];

    events2 = [
        "2020", "2021", "2022", "2023"
    ];

    constructor() { }

    ngOnInit(): void {
    }


}
