import { UserData } from "../types";
import { getAuth, createUserWithEmailAndPassword , deleteUser } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import {firebaseConfig} from "../config/firebase"
import "../consts/firebase";
import { USERS } from "../consts/firebase";
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

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

export async function register(
    userData: UserData,
    password: String
): Promise<UserData> {
    const template: UserData = {
        name: userData["name"],
        email: userData["email"],
    };

    const auth = getAuth();
   
    const userCredential = await createUserWithEmailAndPassword(
        auth,
        template.email.toString(),
        password.toString()
    )
    try {
        
    await setDoc(doc(db, USERS ,userCredential.user.uid),template)
    } catch (error) {
         
        deleteUser(userCredential.user)
        throw error
    }

    return template;
}
