import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Admin} from "../../../../core/domain/admin/admin.model";
import {AdminService} from "../../../../core/domain/admin/admin.service";
import {AdminElementService} from "../admin-element/admin-element.service";
import {AdminElement} from "../admin-element/admin-element.model";
import {AuthService} from "../../../../core/domain/auth/auth.service";
import {ProfessorElement} from "../../../../professor/components/professor/professor-element/professor-element.model";
import {LessonFilter} from "../lesson/admin-lesson-toolbar/lesson-filter.model";
import {ClassroomElement} from "../../../../classroom/components/classroom-element/classroom-element.model";

@Component({
    selector: 'prez-admin-screen',
    templateUrl: './admin-screen.component.html',
    styleUrls: ['./admin-screen.component.scss']
})
export class AdminScreenComponent implements OnInit {

    public adminElement?: AdminElement;
    public indexSelected: number = 0;
    public lessonFilter: LessonFilter = {};
    private adminData?: Admin;

    constructor(private authService: AuthService,
                private route: ActivatedRoute,
                private adminService: AdminService,
                private adminElementService: AdminElementService) { }

    ngOnInit(): void {
        this.initData();
    }

    public logout(): void{
        this.authService.logout();
        window.location.reload();
    }

    public professorLessonTabNavigate(professorElement: ProfessorElement): void {
        this.lessonFilter = {professor: professorElement}
        this.indexSelected = 2;
    }

    public classroomLessonTabNavigate(classroomElement: ClassroomElement): void {
        this.lessonFilter = {classroom: classroomElement};
        this.indexSelected = 2;
    }

    private initAdminData(adminUid: number): void{
        if (!adminUid) return;
        this.adminService.getAdmin(adminUid).subscribe(
            admin =>{
                this.adminData = admin;
                this.adminElement = this.adminElementService.mapAdminElement(this.adminData);
            },
            error => {
                console.warn(error);
            }
        )
    }

    private initData(): void{
        const admin_uid = Number(this.route.snapshot.paramMap.get('id'));
        this.initAdminData(admin_uid);
    }
}
