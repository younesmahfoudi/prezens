import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./user.model";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) { }

    public provideUser(user: User): Observable<User>{
        return this.http.post<User>(`/api/users/`, user);
    }

    public getUser(user: User): Observable<User>{
        return this.http.post<User>(`/api/users/provider`,user);
    }
}
