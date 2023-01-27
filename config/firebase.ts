import { initializeApp, getApps } from "firebase/app";

export const firebaseConfig = {
    apiKey: "AIzaSyA4f6lbg1oWzMqvYy_YwLQ8CGOQtXWW7Ok",
    authDomain: "aeroday-2023.firebaseapp.com",
    projectId: "aeroday-2023",
    storageBucket: "aeroday-2023.appspot.com",
    messagingSenderId: "111292328709",
    appId: "1:111292328709:web:feffa3d64cd7ec2792256c",
    measurementId: "G-BD1K08YBVB"
};

if(getApps().length == 0){
    initializeApp(firebaseConfig);
}
