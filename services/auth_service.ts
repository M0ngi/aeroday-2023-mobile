import { UserData } from "../types";

export async function googleLogin() : Promise<UserData> {
    const template: UserData = {
        name: "",
        email: "",
    }
    return template;
}

export async function emailLogin(email: String, password: String) : Promise<UserData> {
    const template: UserData = {
        name: "",
        email: "",
    }
    return template;
}

export async function register(userData: UserData, password: String) : Promise<UserData> {
    const template: UserData = {
        name: "",
        email: "",
    }
    return template;
}