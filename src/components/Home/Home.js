import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Home = () => {
    const{user}=useFirebase();
    return (
        <div>
            <span>{user? user.displayName:'Nobody stay here'}</span>
        </div>
    );
};

export default Home;