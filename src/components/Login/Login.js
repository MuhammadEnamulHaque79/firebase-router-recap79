import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const{signInWithGoogle}=useFirebase();
    return (
        <div>
            <h3>Please Login</h3>
            <br />
            <div>
            <button onClick={signInWithGoogle} style={{margin:'20px'}}>Sign In Google</button>
            </div>
        
            <form>
                <input type="email" name="email" id="" placeholder='Your email' />
                <br />
                <input type="password" name="password" id="" placeholder='Your password' />
                <br />
                <input type="submit" value="Login" />
               
            </form>
        </div>
    );
};

export default Login;