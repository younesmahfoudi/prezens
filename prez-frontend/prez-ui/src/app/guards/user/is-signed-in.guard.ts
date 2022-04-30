import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from "../../../modules/core/domain/auth/auth.service";

@Injectable({
    providedIn: 'root'
})
export class IsSignedInGuard implements CanActivate {

    constructor(private authService: AuthService, private _router: Router) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const tokenData = this.authService.getTokenData();
        if (tokenData){
            this._router.navigate(["/",tokenData.role,"/",{id: tokenData.user_uid}])
        }
        return (this.authService.isLoggedOut());
    }

}
