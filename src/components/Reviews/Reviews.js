import React from 'react';
import { getAuth } from 'firebase/auth';
// import useFirebase from '../../hooks/useFirebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth=getAuth(app);
const Reviews = () => {
    // const{user}=useFirebase();
    const{user}=useAuthState(auth);
    return (
        <div>
            <h1>
                {user?user.displayName:'Na akhane keu nai'}
            </h1>
        </div>
    );
};

export default Reviews;