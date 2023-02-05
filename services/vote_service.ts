import {firebaseConfig} from "../config/firebase"
import {USERS,AIRSHOW} from "../consts/firebase"
import { initializeApp } from "firebase/app"
import { getFirestore,updateDoc,doc } from "firebase/firestore"
import firebase from "firebase/compat";

export async function airshowVote(userId: string, teamId: string) : Promise<boolean>{

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const userDocRef = doc(db, USERS, userId);
    const airShowDocRef = firebase.database().ref(AIRSHOW+"/"+teamId);
    await airShowDocRef.transaction(function (doc) {
        if (doc) {
            doc.Votes = (doc.Votes || 0) + 1;
        }
        return doc;
    });
    await updateDoc(userDocRef, {"AirShowVote" : teamId})
    return true;
}

export async function videoGraphieVote(userId: String, teamId: String) : Promise<boolean>{
    return false;
}

