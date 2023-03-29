export type ResetPassRequestDTO = {
    email: string;
}

export type ResetPassChangeRequestDTO = {
    email: string;
    code: string;
    newPassword: string;
}