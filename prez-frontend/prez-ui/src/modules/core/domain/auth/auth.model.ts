export interface LoginData{
    email: string;
    password: string;
}

export interface Token{
    access_token: string;
}

export interface TokenData{
    user_uid: number,
    expires: number,
    role: string
}
