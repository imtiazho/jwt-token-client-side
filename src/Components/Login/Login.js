import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';

const Login = () => {
    const [signInWithGoogle, googleuser, googleloading, googleerror] = useSignInWithGoogle(auth);

    const [user, loading, error] = useAuthState(auth);

    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const handleSignIn = () => {
        signInWithGoogle()
    }

    if (user) {
        const url = 'http://localhost:5000/login';
        
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: user.email
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem("accessToken", data.token);
                navigate(from, { replace: true });
                // console.log(data)
            });
    }
    return (
        <div className='mt-4 w-100 mx-auto'>
            <Button onClick={handleSignIn} className='btn btn-primary'>Google</Button>
        </div>
    );
};

export default Login;