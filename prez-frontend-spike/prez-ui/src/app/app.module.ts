import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SignaturePadModule } from 'angular2-signaturepad';
import {ProfViewModule} from "../modules/prof-view/prof-view.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SignaturePadModule,
        ProfViewModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
