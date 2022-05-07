import {ClassroomElement} from "../../../../../classroom/components/classroom-element/classroom-element.model";
import {
    ProfessorElement
} from "../../../../../professor/components/professor/professor-element/professor-element.model";

export interface LessonFilter{
    classroom?: ClassroomElement;
    professor?: ProfessorElement;
}
