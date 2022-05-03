import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from "../modules/auth/auth.component";
import {IsSignedInGuard} from "./guards/user/is-signed-in.guard";
import {IsProfSignedInGuard} from "./guards/professor/is-prof-signed-in.guard";
import {IsAdminSignedInGuard} from "./guards/admin/is-admin-signed-in.guard";
import {IsStudentSignedInGuard} from "./guards/student/is-student-signed-in.guard";
import {StudentComponent} from "../modules/student/student.component";

const routes: Routes = [
    {
        path:'auth',
        component:AuthComponent,
        canActivate: [
            IsSignedInGuard
        ]
    },
    {
        path:'professor/:id',
        component:AuthComponent,
        canActivate: [
            IsProfSignedInGuard
        ]
    },
    {
        path:'admin/:id',
        component:AuthComponent,
        canActivate: [
            IsAdminSignedInGuard
        ]
    },
    {
        path:'student/:id',
        component:StudentComponent,
        canActivate: [
            IsStudentSignedInGuard
        ]
    },
    {
        path: '',
        redirectTo: '/auth',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
