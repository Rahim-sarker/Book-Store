import React from 'react';
import useAuth from '../../context/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div id="login" className="m-5">
            <h1>Please Login</h1>
            <button onClick={signInUsingGoogle} className="btn btn-warning">Google Sign in</button>
        </div>
    );
};

export default Login;