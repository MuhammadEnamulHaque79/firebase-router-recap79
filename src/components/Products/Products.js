import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Products = () => {
    const{user}=useFirebase();
    return (
        <div>
           <span>{user?user.displayName:'No vancancy'}</span>
        </div>
    );
};

export default Products;