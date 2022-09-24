import React from 'react';

const Registration = () => {
    return (
        <div>
            <form>
                <input type="text" placeholder='Enter Your Name' />
                <br />
                <input type="email" name="email" placeholder='Enter Your Email' id="" />
                <br />
                <input type="password" name="password" placeholder='Enter Password' id="" />
                <br />
                <input type="submit" value="Login" />

            </form>
        </div>
    );
};

export default Registration;