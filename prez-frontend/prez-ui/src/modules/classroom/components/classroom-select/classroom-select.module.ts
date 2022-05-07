import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClassroomSelectComponent} from "./classroom-select.component";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {DropDownListModule} from '@syncfusion/ej2-angular-dropdowns';


@NgModule({
    declarations: [
        ClassroomSelectComponent
    ],
    exports: [
        ClassroomSelectComponent
    ],
    imports: [
        CommonModule,
        MatSelectModule,
        FormsModule,
        BrowserModule,
        DropDownListModule
    ]
})
export class ClassroomSelectModule { }
