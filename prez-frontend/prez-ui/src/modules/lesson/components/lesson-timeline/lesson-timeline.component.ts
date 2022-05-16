import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {LessonElement} from "../lesson-element/lesson-element.model";
import {
    ActionEventArgs,
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
import {SelectEventArgs} from "@syncfusion/ej2-schedule/src/schedule/base/interface";

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
    @Input() readOnly: boolean = true;
    @Input() size: string = '75vh';
    @Output() deleteLessonEmitter = new EventEmitter<LessonElement>();
    @Output() addLessonEmitter = new EventEmitter<SelectEventArgs>();
    @Output() openLessonEmitter = new EventEmitter<SelectEventArgs>();

    public timelineSettings?: EventSettingsModel;


    constructor() { }

    ngOnChanges(changes: SimpleChanges) {
        if (changes["lessonElements"]){
            this.initTimeline(this.lessonElements);
        }
    }

    ngOnInit(): void {
        this.initTimeline(this.lessonElements);
    }

    public addLesson(args: SelectEventArgs): void {
        if (!this.readOnly && args.name == 'cellDoubleClick'){
            console.log("in add event: ", args)
            this.addLessonEmitter.emit(args);
        }
    }

    public deleteLesson(args: ActionEventArgs): void {
        if (!this.readOnly && args.name == 'actionComplete' && args.requestType == 'eventRemoved'){
            console.log("in delete event :", args)
        }
    }

    public selectLesson(args: SelectEventArgs): void {
        if (!this.readOnly && args.requestType == 'eventSelect'){
            console.log("in select event: ",args);
            this.openLessonEmitter.emit(args)
        }
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
            allowAdding: false,
            allowDeleting: !this.readOnly,
            allowEditing: false
        };
    }
}
