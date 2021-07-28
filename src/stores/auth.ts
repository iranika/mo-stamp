import Vue from "vue";
import firebase from "../firebase/firebase";
//import Component from 'vue-class-component';

interface UserProfile{
    displayName: string,
    photoUrl: string,
    isLogin: boolean
}

export class AuthStore {
    private static instance: AuthStore;

    public user = new Vue({
        data: {
            displayName: "No Name",
            photoUrl: "",
            isLogin: false
        }
    })

    public static getInstance():AuthStore{
        if (!this.instance){
            this.instance = new AuthStore(AuthStore.getInstance);
        }
        return this.instance;
    }

    public setUser(user: firebase.User | null){
        this.user.isLogin = !!user;
        if(user){
            this.user.displayName = user?.displayName ?? "";
            this.user.photoUrl = user.providerData[0]?.photoURL?.replace("_normal.jpg", ".jpg") ?? "";
        }

    }
    public signin(){
        const provider = new firebase.auth.TwitterAuthProvider();
        firebase.auth().signInWithRedirect(provider).then(result => {
            console.log("signin", result);
        })
    }
    
    public signout(){
        firebase.auth().signOut();
    }

    public updateUser(user: UserProfile){
        firebase.auth().currentUser?.updateProfile(user).then(()=>{
            this.setUser(firebase.auth().currentUser)
            console.log("UpdateUserInfo",this.user);
        })
    }

    constructor(caller: ()=>AuthStore){
        if (caller == AuthStore.getInstance){
            console.log("create instance of AuthStore");
            firebase.auth().onAuthStateChanged((user)=> this.setUser(user));
            console.log("UpdateUserInfo", this.user.$data);
        }
        else if (AuthStore.instance){
            throw new Error("Already created instance of AuthStore. You should use AuthStore.getInstance().")
        }else{
            throw new Error("Constractor args valided illegal. You should use AuthStore.getInstance()")
        }
    }

}

