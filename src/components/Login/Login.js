import React from 'react';

const Login = () => {
    return (
        <div>
            <h3>Please Login</h3>
            <br />
            <div>
            <button style={{margin:'20px'}}>Sign In Google</button>
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