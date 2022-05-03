import {Injectable} from '@angular/core';
import {Register, RegisteredStudent} from "../../../core/domain/register/register.model";
import {RegisteredStudentElement, RegisterElement} from "./register-element.model";
import {StudentElementService} from "../../../student/components/student/student-element/student-element.service";

@Injectable({
    providedIn: 'root'
})
export class RegisterElementService {

    constructor(private studentElementService: StudentElementService) { }

    public mapRegisterElement(register: Register): RegisterElement{
        return{
            signature: register.signature,
            lesson_uid: register.lesson_uid,
            uid: register.uid,
            registered_students: this.mapRegisteredStudentElements(register.registered_students)
        }
    }

    public mapRegisterElements(registers: Register[]): RegisterElement[]{
        if (!registers) return [];
        return registers.map(register => this.mapRegisterElement(register));
    }

    public mapRegisteredStudentElement(registeredStudent: RegisteredStudent): RegisteredStudentElement{
        return{
            lesson_register_uid: registeredStudent.lesson_register_uid,
            student_uid: registeredStudent.student_uid,
            status: registeredStudent.status,
            proof: registeredStudent.proof,
            uid: registeredStudent.uid,
            student: this.studentElementService.mapStudentElement(registeredStudent.student)
        }
    }

    public mapRegisteredStudentElements(registeredStudents: RegisteredStudent[]): RegisteredStudentElement[]{
        if (!registeredStudents) return [];
        return registeredStudents.map(registeredStudent => this.mapRegisteredStudentElement(registeredStudent));
    }
}
