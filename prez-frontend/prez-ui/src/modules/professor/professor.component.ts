import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../core/domain/auth/auth.service";

@Component({
    selector: 'prez-professor',
    templateUrl: './professor.component.html',
    styleUrls: ['./professor.component.scss']
})
export class ProfessorComponent implements OnInit {

    constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService) { }

    ngOnInit(): void {
        const professor_uid = Number(this.route.snapshot.paramMap.get('id'));
        const tokenData = this.authService.getTokenData();
        if (!tokenData || tokenData?.user_uid != professor_uid){
            this.router.navigate(["/","error"])
        }
    }

}
