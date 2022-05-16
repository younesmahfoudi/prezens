import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminNotificationsListComponent} from "./admin-notifications-list.component";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {AdminNotificationsDetailModule} from "../admin-notifications-detail/admin-notifications-detail.module";
import {
    AnnotationService,
    BookmarkViewService,
    LinkAnnotationService,
    MagnificationService, NavigationService, PdfViewerModule, PrintService, TextSearchService, TextSelectionService,
    ThumbnailViewService, ToolbarService
} from "@syncfusion/ej2-angular-pdfviewer";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
    declarations: [
        AdminNotificationsListComponent
    ],
    exports: [
        AdminNotificationsListComponent
    ],
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        AdminNotificationsDetailModule,
        PdfViewerModule,
        MatIconModule
    ],
    providers: [LinkAnnotationService, BookmarkViewService, MagnificationService,
        ThumbnailViewService, ToolbarService, NavigationService, AnnotationService, TextSearchService, TextSelectionService, PrintService]
})
export class AdminNotificationsListModule { }
