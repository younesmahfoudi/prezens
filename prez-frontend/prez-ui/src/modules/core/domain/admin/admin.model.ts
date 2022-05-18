export interface Admin{
    email: string;
    first_name: string;
    last_name: string;
    uid: number;
}

export interface AdminCreate{
    email: string;
    first_name: string;
    last_name: string;
    password: string;
}
