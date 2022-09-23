import React from 'react';
import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
// import useFirebase from '../../hooks/useFirebase';

const auth=getAuth(app);
const Products = () => {
    // const{user}=useFirebase();
    const[user]=useAuthState(auth);
    return (
        <div>
            <p>
                {user?user.displayName:'Nobody stay here!!'}
            </p>
        </div>
    );
};

export default Products;