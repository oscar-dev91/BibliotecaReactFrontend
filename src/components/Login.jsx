import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

function Login({ onLogin }) {
    return (
        <div>
            <GoogleLogin
                onSuccess={credentialResponse => {
                    console.log('ID Token:', credentialResponse.credential);
                    onLogin(credentialResponse.credential);
                }}
                onError={() => {
                    console.error('Login Failed');
                }}
            />
        </div>
    );
}

export default Login;
