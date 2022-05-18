import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {SignaturePad} from "angular2-signaturepad";
import {AuthService} from "../../../../core/domain/auth/auth.service";
import {RegisterService} from "../../../../core/domain/register/register.service";
import {ActivatedRoute, Router} from "@angular/router";
import {LessonElement} from "../../../../lesson/components/lesson-element/lesson-element.model";


@Component({
    selector: 'prez-professor-register-sign',
    templateUrl: './professor-register-sign.component.html',
    styleUrls: ['./professor-register-sign.component.scss']
})
export class ProfessorRegisterSignComponent implements OnInit, AfterViewInit {

    @ViewChild(SignaturePad) signaturePad: SignaturePad;
    public successMessage ?: string;
    public errorMessage ?: string;
    public registerLoading: boolean = false;
    public signatureImg: string;
    public signed: boolean = false;
    @Output() emitRefresh = new EventEmitter();
    @Input() lesson?: LessonElement;


    public signaturePadOptions: Object = {
        'minWidth': 2,
        'canvasWidth': 150,
        'canvasHeight': 150
    };

    constructor(private route: ActivatedRoute,
                private authService: AuthService,
                private registerService: RegisterService,
                private router: Router
    ) {
    }

    ngOnInit(): void {
    }

    ngAfterViewInit() {
        this.signaturePad.set('minWidth', 2);
        this.signaturePad.clear();
    }

    public drawComplete() {
        console.log(this.signaturePad.toDataURL());
    }

    public drawStart() {
        this.signed = true;
    }

    public clearSignature() {
        this.signed = false;
        this.signaturePad.clear();
    }

    public savePad() {
        const base64Data = this.signaturePad.toDataURL();
        console.log(base64Data)
        this.signatureImg = base64Data;
    }

    public submit() {
        this.savePad();
        this.updateRegisterProfessorSign(this.lesson?.register.uid)
    }

    private updateRegisterProfessorSign(registerUid?: number) {
        if (!registerUid) return;
        this.registerLoading = true;
        this.registerService.signRegister(registerUid, this.signatureImg).subscribe(
            () => {
                this.successMessage = 'You signed the registry'
                this.errorMessage = undefined;
                this.registerLoading = false;
                this.signed = false;
                this.emitRefresh.emit();
            },
            error => {
                this.errorMessage = error.error.detail;
                this.registerLoading = false;
                this.signed = false;
            }
        )
    }

}
