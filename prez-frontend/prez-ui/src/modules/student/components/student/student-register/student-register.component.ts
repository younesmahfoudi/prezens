import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../../../core/domain/auth/auth.service";
import {RegisterService} from "../../../../core/domain/register/register.service";
import {SignaturePad} from "angular2-signaturepad";

@Component({
    selector: 'prez-student-register',
    templateUrl: './student-register.component.html',
    styleUrls: ['./student-register.component.scss']
})
export class StudentRegisterComponent implements OnInit, AfterViewInit {

    @ViewChild(SignaturePad) signaturePad: SignaturePad;
    public successMessage?: string;
    public errorMessage?: string;
    public registerLoading: boolean = false;
    public signatureImg: string;
    public signed: boolean = false;

    public signaturePadOptions: Object = {
        'minWidth': 2,
        'canvasWidth': 300,
        'canvasHeight': 300
    };

    constructor(private route: ActivatedRoute,
                private authService: AuthService,
                private registerService: RegisterService,
                private router: Router) { }

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

    public redirect(){
        this.router.navigate(["/","auth"])
    }

    public submit(){
        this.savePad();
        this.updateRegisteredStudent()
    }

    private updateRegisteredStudent(){
        const tokenData = this.authService.getTokenData();
        const registerUid = Number(this.route.snapshot.paramMap.get('idR'));
        if (tokenData && registerUid && this.signed){
            this.registerLoading = true;
            this.registerService.updateRegisteredStudentStatus(registerUid, tokenData.user_uid, {proof:this.signatureImg}).subscribe(
                () => {
                    this.successMessage = 'You are registered successfully'
                    this.errorMessage = undefined;
                    this.registerLoading = false;
                    this.signed = false;
                },
                error => {
                    this.errorMessage = error.error.detail;
                    this.registerLoading = false;
                    this.signed = false;
                }
            )
        }
    }

}
