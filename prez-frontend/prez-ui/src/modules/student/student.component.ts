import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../core/domain/auth/auth.service";

@Component({
    selector: 'prez-student',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

    constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService) { }

    ngOnInit(): void {
        const student_uid = Number(this.route.snapshot.paramMap.get('id'));
        console.log(student_uid)
        const tokenData = this.authService.getTokenData();
        if (!tokenData || tokenData?.user_uid != student_uid){
            this.router.navigate(["/","error"])
        }
    }

}
