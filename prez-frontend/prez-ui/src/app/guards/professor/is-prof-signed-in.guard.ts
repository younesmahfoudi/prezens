import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from "../../../modules/core/domain/auth/auth.service";

@Injectable({
    providedIn: 'root'
})
export class IsProfSignedInGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const tokenData = this.authService.getTokenData();
        if (!tokenData) {
            this.router.navigate(["/","auth"])
        }
        return (tokenData?.role == 'professor');
    }

}
