import {ClassroomElement} from "../../../../classroom/components/classroom-element/classroom-element.model";

export interface AdminStudentsFilter{
    keyword?: string;
    classroom?: ClassroomElement;
    page?: number;
    pSize?: number;
}
