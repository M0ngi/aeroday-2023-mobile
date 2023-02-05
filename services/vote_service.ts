import {firebaseConfig} from "../config/firebase"
import {USERS,AIRSHOW} from "../consts/firebase"
import { initializeApp } from "firebase/app"
import { getFirestore,updateDoc,doc,getDoc } from "firebase/firestore"
import { getDatabase, ref, runTransaction } from "firebase/database";
import firebase from "firebase/compat";

export async function airshowVote(userId: string, teamId: string) : Promise<boolean>{
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const userDocRef = doc(db, USERS, userId);
    const userDoc = await getDoc(userDocRef);
    const oldVote: string | null = userDoc.data().Vote;
    await updateDoc(userDocRef, {"AirShowVote" : teamId});
    try {
        const updates = {};
        updates[`${AIRSHOW}/${teamId}/Votes`] = firebase.database.ServerValue.increment(1);
        if (oldVote != null) {
            updates[`${AIRSHOW}/${oldVote}/Votes`] = firebase.database.ServerValue.increment(-1);
        }
        await firebase.database().ref().update(updates);
    }catch (e) {
        await updateDoc(userDocRef, {"AirShowVote" : oldVote});
    }
    return true;
}

export async function videoGraphieVote(userId: String, teamId: String) : Promise<boolean>{
    return false;
}

