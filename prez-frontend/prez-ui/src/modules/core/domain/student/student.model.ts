export interface Student{
    email: string;
    student_id: number;
    first_name: string;
    last_name: string;
    uid: number;
    class_uid?: number;
}

export interface StudentCreate{
    email: string;
    student_id: number;
    first_name: string;
    last_name: string;
    password: string;
}
