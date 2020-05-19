import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const SignIn = React.memo(({ handleSignIn, errors }) => {
   const { register, handleSubmit, watch } = useForm();

   const watchEmail = watch('email');
   const watchPassword = watch('password');
   const isDisabled = !!watchEmail && !!watchPassword;

   const signIn = (data) => {
      handleSignIn(data);
   };

   return (
      <div className='sign-up-component'>
         {errors && <span className='error-message'>{errors}</span>}
         <div>
            <h1>Sign In</h1>
            <form className='sign-up-form' onSubmit={handleSubmit(signIn)}>
               <label className='label'>Email Address</label>
               <input
                  type='email'
                  name='email' 
                  ref={register({ required: true })}
               />
               <label className='label'>Password</label>
               <input
                  type='password'
                  name='password' 
                  ref={register({ required: true })}
               />
               <button
                  className='sign-up-button'
                  style={!isDisabled ? { backgroundColor: '#9c9c9c' } : null}
                  disabled={!isDisabled}>
                  Sign In
               </button>
               <p>
                  Don't have an account yet? <Link to='/sign-up'>Sign Up</Link>
               </p>
            </form>
         </div>
      </div>
   );
});

export default SignIn;
