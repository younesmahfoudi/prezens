import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthModule} from "../modules/auth/auth.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {JwtInterceptor} from "../modules/core/common/interceptor/jwt.interceptor";
import {StudentModule} from "../modules/student/student.module";
import {LessonDetailModule} from "../modules/lesson/components/lesson-detail/lesson-detail.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AuthModule,
        StudentModule,
        BrowserAnimationsModule,
        LessonDetailModule
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
