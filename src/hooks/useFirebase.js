import { useState } from "react";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    signOut
} from "firebase/auth";
import app from "../firebase.init";
import { useEffect } from "react";

const auth = getAuth(app);
const useFirebase = () => {
    const [user, setUser] = useState({});

    const provider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        // console.log('working');
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setUser(user);
            })
            .catch((error) => {
                console.error(error);
            })
    }
    // return[user,setUser];

    const handleSignOut=()=>{
        signOut(auth)
            .then(()=>{
                //
            })
            .catch((error)=>{
                //
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth,(user)=>{
            setUser(user);
        })
    }, []);

    return {
        user,
        handleSignOut,
        signInWithGoogle
    }
}
export default useFirebase;