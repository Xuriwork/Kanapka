import React, { useState } from 'react';
import SignUp from './SignUp';
import firebase from '../../utils/Firebase';

export const SignUpContainer = () => {
   const [errors, setErrors] = useState(null);

   const handleSignUp = (email, password, name, phoneNumber) => {
      firebase
         .auth()
         .createUserWithEmailAndPassword(email, password)
         .then(({ user }) => {
            if (user) {
               user.updateProfile({ displayName: name, phoneNumber });
               return user;
            }
         })
         .then((user) => {
            const userId = user.uid;
            const email = user.email;
            const userInfo = {
               userId: userId,
               email: email,
               phoneNumber,
            };
            firebase.firestore().collection('users').doc(userId).set(userInfo);
         })
         .catch((error) => {
            setErrors(error);
            console.log(error);
         });
   };

   return <SignUp handleSignUp={handleSignUp} errors={errors} />;
};

export default SignUpContainer;
