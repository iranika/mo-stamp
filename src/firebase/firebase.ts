import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { FirestoreSimple } from "@firestore-simple/web";
import { Credentials } from './types/credentials'

export const credentials: Credentials = {
    config: {
        apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
        authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
        storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
        databaseURL: process.env.VUE_APP_FIREBASE_DB_URL,
        projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
        messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID
    }
}

//console.log(credentials.config);
if (!firebase.apps.length){
    firebase.initializeApp(credentials.config)
}

export const CheerRef = firebase.firestore().collection("cheer");
export const firestoreSimple = new FirestoreSimple(firebase.firestore())

export default firebase;