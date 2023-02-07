import {USERS,AIRSHOW} from "../consts/firebase"
import { getDatabase, ref ,get ,child } from "firebase/database";
import firebase from "firebase/compat";

export async function airshowVote(userId: string, teamId: string) : Promise<boolean>{
    let oldVote: string | null = null;
    get(child(ref(getDatabase()), `${USERS}/${userId}/Vote`)).then((snapshot) => {
        if (snapshot.exists()) {
            oldVote = snapshot.val();
        }
    }).catch((error) => {
        console.error(error);
    });
    const updates = {};
    updates[`${USERS}/${userId}/Vote}`] = teamId;
    updates[`${AIRSHOW}/${teamId}/Votes`] = firebase.database.ServerValue.increment(1);
    if (oldVote != null) {
        updates[`${AIRSHOW}/${oldVote}/Votes`] = firebase.database.ServerValue.increment(-1);
    }
    await firebase.database().ref().update(updates);
    return true;
}

export async function videoGraphieVote(userId: String, teamId: String) : Promise<boolean>{
    return false;
}

