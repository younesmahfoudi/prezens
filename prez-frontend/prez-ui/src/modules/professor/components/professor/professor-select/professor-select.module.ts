import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfessorSelectComponent} from "./professor-select.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        ProfessorSelectComponent
    ],
    exports: [
        ProfessorSelectComponent
    ],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatSelectModule,
        FormsModule
    ]
})
export class ProfessorSelectModule { }
