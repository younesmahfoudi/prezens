import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Admin, AdminCreate} from "./admin.model";

@Injectable({
    providedIn: 'root'
})
export class AdminService {

    constructor(private http: HttpClient) { }

    public getAdmin(adminUid: number): Observable<Admin>{
        return this.http.get<Admin>(`/api/admins/${adminUid}`);
    }

    public signupAdmin(adminCreate: AdminCreate): Observable<any>{
        return this.http.post<any>(`/api/admins/signup`, adminCreate);
    }
}
