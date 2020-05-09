import React, { useState } from 'react';

import firebase from '../../utils/Firebase';
import SignIn from './SignIn';

export const SignInContainer = ({ history }) => {
    const [errors, setErrors] = useState(null);

    const handleSignIn = (data) => {
        firebase.auth().signInWithEmailAndPassword(data.email, data.password)
        .then(() => {
            history.push('/menu');
        })
        .catch((error) => {
            setErrors(error.message);
        });
    };

    return (
        <SignIn handleSignIn={handleSignIn} errors={errors} />
    )
}

export default SignInContainer;