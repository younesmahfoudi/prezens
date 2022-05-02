import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentComponent} from './student.component';
import {StudentScreenModule} from "./components/student/student-screen/student-screen.module";
import { StudentPresenceComponent } from './components/student/student-presence/student-presence.component';
import { StudentJustifiedComponent } from './components/student/student-justified/student-justified.component';
import { StudentDeniedComponent } from './components/student/student-denied/student-denied.component';
import { StudentPendingComponent } from './components/student/student-pending/student-pending.component';

@NgModule({
    declarations: [
        StudentComponent
    ],
    imports: [
        CommonModule,
        StudentScreenModule
    ]
})
export class StudentModule { }
