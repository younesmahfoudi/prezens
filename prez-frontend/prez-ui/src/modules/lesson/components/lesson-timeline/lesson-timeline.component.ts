import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {LessonElement} from "../lesson-element/lesson-element.model";
import {
    AgendaService,
    DayService,
    EventSettingsModel,
    MonthAgendaService,
    MonthService,
    TimelineMonthService,
    TimelineViewsService,
    WeekService,
    WorkWeekService
} from "@syncfusion/ej2-angular-schedule";

@Component({
    selector: 'prez-lesson-timeline',
    templateUrl: './lesson-timeline.component.html',
    providers: [
        DayService,
        WeekService,
        WorkWeekService,
        MonthService,
        AgendaService,
        MonthAgendaService,
        TimelineViewsService,
        TimelineMonthService
    ],
    styleUrls: ['./lesson-timeline.component.scss']
})
export class LessonTimelineComponent implements OnInit, OnChanges {

    @Input() lessonElements: LessonElement[] = [];
    @Input() readOnly: boolean = false;
    @Input() size: string = '75vh';

    public timelineSettings?: EventSettingsModel;

    constructor() { }

    ngOnChanges(changes: SimpleChanges) {
        if (changes["lessonElements"] && changes["lessonElements"].isFirstChange()){
            this.initTimeline(this.lessonElements);
        }
    }

    ngOnInit(): void {
        this.initTimeline(this.lessonElements);
    }

    private initTimeline(lessonElements: LessonElement[]): void{
        if (!lessonElements) return;
        this.timelineSettings = {
            dataSource: lessonElements,
            fields: {
                id: 'uid',
                subject: { name: 'description' },
                isAllDay: { name: 'all_day' },
                startTime: { name: 'start_at' },
                endTime: { name: 'end_at' },
                description: { name: 'professor_name' }
            },
            allowAdding: this.readOnly ,
            allowDeleting: this.readOnly,
            allowEditing: this.readOnly
        };
    }
}
