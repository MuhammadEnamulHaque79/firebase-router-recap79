import React from 'react';

const Login = () => {
    return (
        <div>
            <h3>Please Login</h3>
            <form>
                <input type="email" name="email" placeholder='Enter Your Email' id="" />
                <br />
                <input type="password" name="password" placeholder='Enter Password' id="" />
                <br />
                <input type="submit" value="Login" />
                
            </form>
        </div>
    );
};

export default Login;