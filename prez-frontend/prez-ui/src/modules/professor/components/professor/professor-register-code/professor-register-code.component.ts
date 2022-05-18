import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'prez-professor-register-code',
    templateUrl: './professor-register-code.component.html',
    styleUrls: ['./professor-register-code.component.scss']
})
export class ProfessorRegisterCodeComponent implements OnInit {

    public qrData?: string;

    constructor(private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
        this.initData()
    }

    private initData(): void {
        const idRegister: number = Number(this.route.snapshot.paramMap.get('idR'));
        if (!idRegister){
            this.router.navigate(["/","error"]);
        }
        this.qrData = `http://localhost:4200/register/%2F;idR=${idRegister}`;
    }

}
