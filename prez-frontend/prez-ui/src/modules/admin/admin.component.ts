import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../core/domain/auth/auth.service";

@Component({
    selector: 'prez-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

    constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService) { }

    ngOnInit(): void {
        const admin_uid = Number(this.route.snapshot.paramMap.get('id'));
        console.log(admin_uid)
        const tokenData = this.authService.getTokenData();
        if (!tokenData || tokenData?.user_uid != admin_uid){
            this.router.navigate(["/","error"])
        }
    }

}
