import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgxFileDropEntry} from "ngx-file-drop";

@Component({
    selector: 'prez-student-proof-uploader',
    templateUrl: './student-proof-uploader.component.html',
    styleUrls: ['./student-proof-uploader.component.scss']
})
export class StudentProofUploaderComponent implements OnInit {

    @Output() fileEmitter = new EventEmitter<string>();
    public files: NgxFileDropEntry[] = [];

    constructor() { }

    ngOnInit() {
    }

    public dropped(files: NgxFileDropEntry[]) {
        this.files = files;
        for (const droppedFile of files) {

            if (droppedFile.fileEntry.isFile) {
                const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
                fileEntry.file((file: File) => {

                    // Here you can access the real file
                    console.log(droppedFile.relativePath, file);

                    if (file.type == 'application/pdf'){
                        this.setPdf(file);
                    }
                });
            } else {
                const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
                console.log(droppedFile.relativePath, fileEntry);
            }
        }
    }

    public fileOver(event: any){
        console.log(event);
    }

    public fileLeave(event: any){
        console.log(event);
    }

    private setPdf(data: File): void {
        this.getBase64(data);
    }

    private getBase64(file: File): void {
        let me = this;
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            me.emitFile(reader.result?.toString())
        };
        reader.onerror = function (error) {
            console.warn('Error: ', error);
        };
    }

    private emitFile(value?: string) {
        if (!value) return;
        this.fileEmitter.emit(value);
    }

}
