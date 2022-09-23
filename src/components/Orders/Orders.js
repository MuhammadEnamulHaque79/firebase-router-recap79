import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
// import useFirebase from '../../hooks/useFirebase';

const auth=getAuth(app);
const Orders = () => {
    // const{user}=useFirebase();
    const{user}=useAuthState(auth);
    return (
        <div>
            <h2>
                {user?user.displayName:'Nobody stay here;booo.....th'}
            </h2>
        </div>
    );
};

export default Orders;