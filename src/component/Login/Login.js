import React from 'react';
import Auth from './useAuth';

const Login = () => {
    const auth=Auth()
    console.log(auth.signInWithGoogle);
    return (
        <div>
            <h1>Log in</h1>
            <button onClick={auth.signInWithGoogle}>Sign in with google</button>
        </div>
    );
};

export default Login;