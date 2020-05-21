/* eslint-disable no-useless-escape */
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const SignUp = React.memo(({ handleSignUp, errors, loading }) => {
  const { register, handleSubmit, errors: formErrors, watch } = useForm();
  const password = useRef({});
  password.current = watch('password', '');

  const signUp = (data) => {
    handleSignUp(data);
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
          <label>Full Name</label>
          <span>
            <input
              type='text'
              name='firstName'
              className='field-divided'
              placeholder='First'
              ref={register({
                required: {
                  value: true,
                  message: 'This field is required',
                },
                pattern: {
                  value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
                  message: "That doesn't look like a valid name.",
                },
              })}
            />
            <input
              type='text'
              name='lastName'
              className='field-divided'
              placeholder='Last'
              ref={register({
                required: {
                  value: true,
                  message: 'This field is required',
                },
                pattern: {
                  value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
                  message: "That doesn't look like a valid name.",
                },
              })}
            />
          </span>
          <div className='form-name-error-container'>
            <div className='form-name-error'>
              {formErrors.firstName && (
                <span className='span-error-message firstName'>
                  {formErrors.firstName.message}
                </span>
              )}
            </div>
            <div className='form-name-error'>
              {formErrors.lastName && (
                <span className='span-error-message'>
                  {formErrors.lastName.message}
                </span>
              )}
            </div>
          </div>
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
                value: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
              },
              message: "That doesn't look like a valid email.",
            })}
          />
          {formErrors.email && (
            <span className='span-error-message'>
              {formErrors.email.message}
            </span>
          )}
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
          {formErrors.password && (
            <span className='span-error-message'>
              {formErrors.password.message}
            </span>
          )}
          <label>Confirm Password</label>
          <input
            type='password'
            name='confirmPassword'
            ref={register({
              required: {
                value: true,
                message: 'This field is required',
              },
              validate: (value) => value === password.current || 'Passwords do not match',
              minLength: {
                value: 4,
                message: 'Must be at least 4 characters',
              },
            })}
          />
          {formErrors.confirmPassword && (
            <span className='span-error-message'>
              {formErrors.confirmPassword.message}
            </span>
          )}
          <button className='yellow-button' disabled={loading}>
            {loading ? <div className='sbl-circ-path'></div> : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
});

export default SignUp;
