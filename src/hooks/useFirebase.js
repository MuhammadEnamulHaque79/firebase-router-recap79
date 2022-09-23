import { useEffect, useState } from "react"
import app from "../firebase.init";
import {
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    signOut
} from "firebase/auth";

const auth = getAuth(app);
const useFirebase = () => {
    const [user, setUser] = useState({});
    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        // console.log('yah,working');
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user);
                console.log(user);
            })
            .catch((error) => {
                console.error(error);
            })
    };

    const handleSignOut=()=>{
        signOut(auth)
            .then(()=>{

            }).catch(()=>{

            });
    };

    useEffect(() => {
        onAuthStateChanged(auth,(user)=>{
            setUser(user);
        })
    }, []);

    return {
        user,
        signOut,
        handleSignOut,
        signInWithGoogle
    };

}
export default useFirebase;