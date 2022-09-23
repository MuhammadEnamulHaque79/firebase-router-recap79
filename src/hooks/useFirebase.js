import { useEffect, useState } from "react"

const useFirebase=()=>{
    const[user,setUser]=useState({});
    useEffect( ()=>{

    },[])
    signInWithGoogle=()=>{
        console.log('yah,working');
    }
    return[user,setUser];

}
export default useFirebase;