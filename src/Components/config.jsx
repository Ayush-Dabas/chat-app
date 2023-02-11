import { initializeApp } from "firebase/app";
import { getAuth ,GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseconfig = {
    apiKey: "AIzaSyDNZchMIMvkObtIJlbCHjfIQdIMDTPYEFQ",
    authDomain: "chat-app-ddc88.firebaseapp.com",
    projectId: "chat-app-ddc88",
    storageBucket: "chat-app-ddc88.appspot.com",
    messagingSenderId: "883468214482",
    appId: "1:883468214482:web:8f947943a3a7aee8dccd0b",
    measurementId: "G-S2700VBYJD"
}

const app = initializeApp(firebaseconfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result)=>{
        console.log(result)
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.profilePic;
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);
        
    }).catch((error)=>{
        alert(error);
    })
}
