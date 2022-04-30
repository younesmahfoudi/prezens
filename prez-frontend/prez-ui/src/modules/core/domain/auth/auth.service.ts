import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";
import {Injectable} from "@angular/core";
import {LoginData, Token, TokenData} from "./auth.model";
import jwt_decode from 'jwt-decode';


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private pathUrl: string = '/api/user';

    constructor(private http: HttpClient) {
    }

    private static setSession(token: Token): void {
        localStorage.setItem('access_token', token.access_token);
    }

    public login(loginData: LoginData) {
        return this.http.post<Token>(`${this.pathUrl}/login`, loginData)
            .pipe(
                tap(res =>AuthService.setSession(res))
            );
    }

    public logout() {
        localStorage.removeItem("access_token");
    }

    public isLoggedIn() {
        return localStorage.getItem("access_token");
    }

    public isLoggedOut() {
        return !this.isLoggedIn();
    }

    public getTokenData(): TokenData | undefined{
        const token = localStorage.getItem("access_token");
        if (!token) return ;
        return jwt_decode(token);
    }
}
