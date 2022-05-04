import {Injectable} from '@angular/core';
import {Admin} from "../../../../core/domain/admin/admin.model";
import {AdminElement} from "./admin-element.model";

@Injectable({
    providedIn: 'root'
})
export class AdminElementService {

    public mapAdminElement(admin: Admin): AdminElement{
        return {
            email: admin.email,
            first_name: admin.first_name,
            last_name: admin.last_name,
            uid: admin.uid
        }
    }

    public mapAdminElements(admins: Admin[]): AdminElement[]{
        if (!admins) return [];
        return admins.map(admin => this.mapAdminElement(admin));
    }
}
