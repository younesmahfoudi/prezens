import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Admin} from "./admin.model";

@Injectable({
    providedIn: 'root'
})
export class AdminService {

    constructor(private http: HttpClient) { }

    public getAdmin(adminUid: number): Observable<Admin>{
        return this.http.get<Admin>(`/api/admins/${adminUid}`);
    }

}
