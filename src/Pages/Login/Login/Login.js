import React from 'react';
import useAuth from './../../../hooks/useAuth'

const Login = () => {

    const {signInUsingGoogle} = useAuth()

    return (
        <div className='my-5'>
            <h1>Please Log In</h1>
            <button onClick={signInUsingGoogle} className="btn btn-danger">Google Sign in</button>
        </div>
    );
};

export default Login;