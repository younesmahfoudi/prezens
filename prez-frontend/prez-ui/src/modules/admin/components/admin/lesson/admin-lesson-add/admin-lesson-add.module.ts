import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminLessonAddComponent} from "./admin-lesson-add.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
    declarations: [
        AdminLessonAddComponent
    ],
    imports: [
        CommonModule,
        MatDialogModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatProgressSpinnerModule
    ]
})
export class AdminLessonAddModule { }
