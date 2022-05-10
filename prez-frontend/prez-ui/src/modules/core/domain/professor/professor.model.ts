export interface Professor{
    email: string;
    first_name: string;
    last_name: string;
    uid: number;
}

export interface ProfessorCreate{
    email: string;
    first_name: string;
    last_name: string;
    password: string;
}
