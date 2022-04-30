import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SigninFormComponent} from "./signin-form.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";



@NgModule({
    declarations: [
        SigninFormComponent
    ],
    exports: [
        SigninFormComponent
    ],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatIconModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule
    ]
})
export class SigninFormModule { }
