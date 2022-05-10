import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../core/domain/user/user.service";
import {User} from "../../../core/domain/user/user.model";
import {StudentService} from "../../../core/domain/student/student.service";
import {ProfessorService} from "../../../core/domain/professor/professor.service";

@Component({
    selector: 'prez-signup-screen',
    templateUrl: './signup-screen.component.html',
    styleUrls: ['./signup-screen.component.scss']
})
export class SignupScreenComponent implements OnInit {

    public signupDone?: string;
    public user?: User;
    public hide: boolean = true;
    public errorMessage?: string;
    public emailFormGroup: FormGroup;
    public studentDataFormGroup: FormGroup;
    public professorDataFormGroup: FormGroup;

    constructor(private _formBuilder: FormBuilder,
                private userService: UserService,
                private studentService: StudentService,
                private professorService: ProfessorService) {}

    ngOnInit() {
        this.emailFormGroup = this._formBuilder.group({
            email: ['', Validators.compose([Validators.required, Validators.email])],
        });
        this.studentDataFormGroup = this._formBuilder.group({
            first_name: ['', Validators.required],
            last_name: ['', Validators.required],
            student_id: ['', Validators.compose([Validators.required, Validators.pattern("^[0-9]*$")])],
            password: ['', Validators.compose([Validators.required, Validators.minLength(4)])]
        });
        this.professorDataFormGroup = this._formBuilder.group({
            first_name: ['', Validators.required],
            last_name: ['', Validators.required],
            password: ['', Validators.compose([Validators.required, Validators.minLength(4)])]
        });
    }

    public checkUser(): void {
        if (this.emailFormGroup.valid){
            this.userService.getUser(this.emailFormGroup.value).subscribe(
                user => {
                    this.user = user;
                },
                error => {
                    this.errorMessage = error.error.detail;
                    console.log(this.errorMessage);
                }
            )
        }
    }

    public submit(): void {
        if (this.user?.role == 'student' && this.studentDataFormGroup.valid){
            this.studentService.signupStudent({...this.emailFormGroup.getRawValue(),...this.studentDataFormGroup.getRawValue()}).subscribe(
                () => {
                    this.errorMessage = undefined;
                    this.signupDone = 'registration successfully completed'
                },
                error => {
                    this.errorMessage = error.error.detail;
                }
            )
        }
        if (this.user?.role == 'professor' && this.professorDataFormGroup.valid){
            this.professorService.signupProfessor({...this.emailFormGroup.getRawValue(),...this.professorDataFormGroup.getRawValue()}).subscribe(
                () => {
                    this.errorMessage = undefined;
                    this.signupDone = 'registration successfully completed'
                },
                error => {
                    this.errorMessage = error.error.detail;
                }
            )
        }
    }

}
