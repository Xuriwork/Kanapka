/* eslint-disable no-useless-escape */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input';

const SignUp = ({ handleSignUp, errors }) => {
  const [phoneNumber, setPhoneNumber] = useState(null);
  const { register, handleSubmit, errors: formErrors } = useForm();

  const signUp = (data) => {
    handleSignUp(data.email, data.password, data.name, phoneNumber);
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
              placeholder='First'
              className='field-divided'
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
              placeholder='Last'
              className='field-divided'
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
          {formErrors.name && (
            <span className='span-error-message'>
              {formErrors.name.message}
            </span>
          )}
          <label>Email Address</label>
          <input
            type='email'
            name='email'
            placeholder='Email'
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
            placeholder='Password'
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
            placeholder='Confirm Password'
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
          {formErrors.confirmPassword && (
            <span className='span-error-message'>
              {formErrors.confirmPassword.message}
            </span>
          )}
          <label>Phone Number</label>
          <span>
            <PhoneInput
              international
              defaultCountry='US'
              name='phoneNumber'
              value={phoneNumber}
              onChange={(inputValue) => setPhoneNumber(inputValue)}
            />
          </span>
          {formErrors.phoneNumber && (
            <span className='span-error-message'>
              {formErrors.phoneNumber.message}
            </span>
          )}
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
