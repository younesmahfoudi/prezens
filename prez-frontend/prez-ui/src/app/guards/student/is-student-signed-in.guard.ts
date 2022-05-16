import {Injectable} from '@angular/core';
import {
    ActivatedRoute,
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree
} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from "../../../modules/core/domain/auth/auth.service";

@Injectable({
    providedIn: 'root'
})
export class IsStudentSignedInGuard implements CanActivate {

    constructor(private authService: AuthService,private _router: Router, private route: ActivatedRoute) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const tokenData = this.authService.getTokenData()
        if (!tokenData) {
            this._router.navigate(["/","auth"])
        }
        return (tokenData?.role == 'student');
    }
}
