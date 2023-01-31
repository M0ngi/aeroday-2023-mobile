import {firebaseConfig} from "../config/firebase"
import {USERS,AIRSHOW} from "../consts/firebase"
import { initializeApp } from "firebase/app"
import { getFirestore,updateDoc,doc, getDoc } from "firebase/firestore"

export async function airshowVote(userId: string, teamId: string) : Promise<boolean>{

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const userDocRef = doc(db, USERS, userId);
    const userDocSnap = await getDoc(userDocRef);

    if (userDocSnap.exists()) {
        if(userDocSnap.get("AirShowVote") != null){
            const airShowDocRef = doc(db, AIRSHOW, teamId);
            const airShowDocSnap = await getDoc(userDocRef);
            const votes:number = airShowDocSnap.get("Votes");
            await updateDoc(airShowDocRef,{"Votes" : votes+1});
            await updateDoc(userDocRef, {"AirShowVote" : teamId})
            return true;
        }
        else throw new Error("No such vote");
    } else {
        throw new Error("The user has already voted, he can vote once");
    }
}

export async function videoGraphieVote(userId: String, teamId: String) : Promise<boolean>{
    return false;
}

