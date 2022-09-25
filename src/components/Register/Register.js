import React from 'react';

const Register = () => {
    return (
        <div>
            <h3>Please Register</h3>
            <form>
                <input type="text" placeholder='Your Name' />
                <br />
                <input type="email" name="email" placeholder='Enter Your Email' id="" />
                <br />
                <input type="password" name="password" placeholder='Enter Password' id="" />
                <br />
                <input type="submit" value="Register" />

            </form>
        </div>
    );
};

export default Register;