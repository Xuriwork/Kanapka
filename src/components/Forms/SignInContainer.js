import React, { useState } from 'react';
import SignIn from './SignIn';
import firebase from '../../utils/Firebase';

export const SignInContainer = () => {
    const [errors, setErrors] = useState(null);

    const handleSignIn = (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .catch((error) => {
            setErrors(error.message);
        });
    };

    return (
        <SignIn handleSignIn={handleSignIn} errors={errors} />
    )
}

export default SignInContainer;