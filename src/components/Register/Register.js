import React from 'react';

const Register = () => {
    return (
        <div>
            <h3>Please Register Now</h3><br />
            
            <form>
                <input type="text" placeholder='Your name' />
                <br />
                <input type="email" name="email" id="" placeholder='Your email' />
                <br />
                <input type="password" name="password" id="" placeholder='Your password' />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;