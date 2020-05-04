/* eslint-disable no-useless-escape */
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useSession } from '../../hooks/useSession';

const SignUp = ({ handleSignUp, errors }) => {
   const user = useSession();
   const { register, handleSubmit, errors: formErrors } = useForm();

   const signUp = (data) => {
      handleSignUp(data.email, data.password, data.name, data.phoneNumber);
   };

   if (user) {
      return <Redirect to={{pathname:'/'}} />
   };

   return (
      <div className='sign-up-component'>
         {errors && <span className='error-message'>{errors}</span>}
         <div>
            <h1>Create an Account</h1>
            <form className='sign-up-form' onSubmit={handleSubmit(signUp)}>
               <p style={{ textAlign: 'center' }}>
                  Already have an account? <Link to='/sign-in'>Sign In</Link>
               </p>
               <label>Name</label>
               <input
                  type='text'
                  name='name'
                  ref={register({
                     required: {
                        value: true,
                        message: 'This field is required',
                     },
                     pattern: {
                        value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
                        message: 'That doesn\'t look like a valid name.',
                     }
                  })}
               />
               {formErrors.name && <span className='span-error-message'>{formErrors.name.message}</span>}
               <label>Email Address</label>
               <input
                  type='email'
                  name='email'
                  ref={register({
                     required: {
                        value: true,
                        message: 'This field is required',
                     },
                     pattern: {
                        value: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/},
                        message: 'That doesn\'t look like a valid email.'
                  })}
               />
               {formErrors.email && <span className='span-error-message'>{formErrors.email.message}</span>}
               <label>Password</label>
               <input
                  type='password'
                  name='password'
                  ref={register({
                     required: {
                        value: true,
                        message: 'This field is required',
                     },
                     minLength: {
                        value: 4,
                        message: 'Must be at least 4 characters',
                     },
                  })}
               />
               {formErrors.password && <span className='span-error-message'>{formErrors.password.message}</span>}
               <label>Confirm Password</label>
               <input
                  type='password'
                  name='confirmPassword'
                  ref={register({
                     required: {
                        value: true,
                        message: 'This field is required',
                     },
                     minLength: {
                        value: 4,
                        message: 'Must be at least 4 characters',
                     },
                  })}
               />
               {formErrors.confirmPassword && <span className='span-error-message'>{formErrors.confirmPassword.message}</span>}
               <label>Phone Number</label>
               <input
                  type='tel'
                  name='phoneNumber'
                  ref={register({
                     required: {
                        value: true,
                        message: 'This field is required',
                     },
                     pattern: {
                        value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                        message: 'That doesn\'t look like a valid phone number.'
                     },
                  })}
               />
               {formErrors.phoneNumber && <span className='span-error-message'>{formErrors.phoneNumber.message}</span>}
               <span>
                  This is needed for security and questions about your delivery
                  orders.
               </span>
               <button className='sign-up-button'>Sign Up</button>
            </form>
         </div>
      </div>
   );
};

export default SignUp;
