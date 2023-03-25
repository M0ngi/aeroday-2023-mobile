import { IUser } from "../types";

export async function googleLogin() : Promise<IUser> {
    const template: IUser = {
        _id: "",
        name: "",
        email: "",
    }
    return template;
}

export async function emailLogin(email: String, password: String) : Promise<IUser> {
    const template: IUser = {
        _id: "",
        name: "",
        email: "",
    }
    return template;
}

export async function register(userData: IUser, password: String) : Promise<IUser> {
    const template: IUser = {
        _id: "",
        name: "",
        email: "",
    }
    return template;
}