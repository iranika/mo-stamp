import {inject, InjectionKey, reactive} from "vue";
import firebase from "../firebase/firebase";

interface UserProfile {
    displayName?: string;
    photoURL?: string;
}

const dummyUser: UserProfile = {
    displayName: "テストユーザー",
    photoURL: "https://pbs.twimg.com/profile_images/1384742457477238784/R_eEQtFX_400x400.jpg"
}

const authStore = ()=>{
    const state = reactive({
        isLogin: false,
        displayName: "",
        photoURL: ""
    })
    const setUser = (user: firebase.User | null)=>{
        state.isLogin = !!user
        if (user){
            state.displayName = user.displayName ?? ""
            state.photoURL = user.providerData[0]?.photoURL?.replace("_normal.jpg", ".jpg") ?? ""
        }
        console.log("set user:", state, user)
    }
    const signin = ()=>{
        const provider = new firebase.auth.TwitterAuthProvider();
        firebase.auth().signInWithRedirect(provider).then((result) =>{
            console.log("signin",result)
        })
    }
    const signout = ()=> firebase.auth().signOut()

    
    const updateUser = (user: UserProfile) =>{
        firebase.auth().currentUser?.updateProfile(user).then(()=>{
            setUser(firebase.auth().currentUser)
            }
        )
    }

    firebase.auth().onAuthStateChanged((user)=> setUser(user))

    return {
        state,
        setUser,
        signin,
        signout,
        //updateUser
    }

}


export default authStore;

export type AuthStore = ReturnType<typeof authStore>
export const authStoreKey: InjectionKey<AuthStore> = Symbol("authStore")

export const useAuthStore = ()=>{
    const store = inject(authStoreKey);
    if (!store){
        throw new Error(`${authStoreKey} is not provided`);
    }
    return store;
}