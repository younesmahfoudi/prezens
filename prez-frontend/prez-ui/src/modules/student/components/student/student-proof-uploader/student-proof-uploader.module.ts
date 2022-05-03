import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentProofUploaderComponent} from "./student-proof-uploader.component";
import {NgxFileDropModule} from "ngx-file-drop";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
    declarations: [
        StudentProofUploaderComponent
    ],
    exports: [
        StudentProofUploaderComponent
    ],
    imports: [
        CommonModule,
        NgxFileDropModule,
        MatButtonModule,
        MatIconModule
    ]
})
export class StudentProofUploaderModule { }
