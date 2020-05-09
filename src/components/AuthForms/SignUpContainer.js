import React, { useState } from 'react';
import SignUp from './SignUp';
import firebase from '../../utils/Firebase';

export const SignUpContainer = ({ history }) => {
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSignUp = (data) => {
    setLoading(true);
    const { email, password, firstName, lastName } = data;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        if (user) {
          user.updateProfile({ displayName: firstName });
          return user;
        }
      })
      .then((user) => {
        const userId = user.uid;
        firebase.firestore().collection('users').doc(userId).set({
          firstName,
          lastName,
          email: user.email,
          userId,
          createdAt: new Date(),
        });
        history.push('/menu');
      })
      .catch((error) => {
        setErrors(error.message);
        console.log(error);
      });
    setLoading(false);
  };

  return (
    <SignUp handleSignUp={handleSignUp} errors={errors} loading={loading} />
  );
};

export default SignUpContainer;
