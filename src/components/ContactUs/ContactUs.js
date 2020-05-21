import React, { useState } from 'react';

const ContactUs = ({ handleSendFeedback, success, register, handleSubmit, errors, reset }) => {
  const [currentlySelected, setCurrentlySelected] = useState(null);

  const handleChange = (event) => {
    setCurrentlySelected(event.target.value);
  };

  return (
    <>
      <div className='header'>
        <h1>Contact Us</h1>
      </div>
      <div className='contact-us-component'>
      { success && <div className='success-div'>Thanks, your feedback has been sent! <span role='img' aria-label='Rocket Emoji'>🚀</span></div> }
        <form>
          <div className='input-group'>
            <span className='field-divided'>
              <label htmlFor='feedbackType'>Feedback Type</label>
              <select name='feedbackType' ref={register({ required: true })}>
                <option>Complaint</option>
                <option>Inquiry</option>
                <option>Suggestion</option>
                <option>Compliment</option>
              </select>
            </span>
            <span className='field-divided'>
              <label htmlFor='feedbackCategory'>Feedback Category</label>
              <select
                name='feedbackCategory'
                ref={register({ required: true })}
              >
                <option>Product</option>
                <option>Service</option>
                <option>Facilities</option>
              </select>
            </span>
          </div>
          <h2>Contact Information</h2>
          <div className='input-group'>
            <span className='field-divided'>
              <label htmlFor='firstName'>First Name</label>
              <input
                type='text'
                name='firstName'
                ref={register({ required: true })}
              />
              {errors.firstName && <span className='span-error-message'>This field is required</span>}
            </span>
            <span className='field-divided'>
              <label htmlFor='lastName'>Last Name</label>
              <input
                type='text'
                name='lastName'
                ref={register({ required: true })}
              />
              {errors.lastName && <span className='span-error-message'>This field is required</span>}
            </span>
          </div>
          <div className='input-group'>
            <span className='field-divided'>
              <label htmlFor='preferredMethodOfContact'>
                Preferred Method of Contact:
              </label>
              <select
                id='select'
                name='preferredMethodOfContact'
                onChange={handleChange}
                ref={register({ required: true })}
              >
                <option value='email'>Email</option>
                <option value='phone'>Phone</option>
                <option value='do-not-contact'>Do Not Contact</option>
              </select>
            </span>
            <span className='field-divided'>
              {!currentlySelected || currentlySelected === 'email' ? (
                <>
                  <label htmlFor='email'>Email</label>
                  <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    ref={register({ required: true })}
                  />
                  {errors.email && <span className='span-error-message'>This field is required</span>}
                </>
              ) : null}
              {currentlySelected === 'phone' && (
                <>
                  <label htmlFor='phone'>Phone</label>
                  <input
                    type='phone'
                    name='phone'
                    placeholder='Phone'
                    ref={register({ required: true })}
                  />
                  {errors.phone && <span className='span-error-message'>This field is required</span>}
                </>
              )}
              {currentlySelected === 'do-not-contact' && null}
            </span>
          </div>
          <textarea
            className='field-long'
            name='comments'
            placeholder='COMMENTS (500 CHARACTER LIMIT)'
            ref={register}
          ></textarea>
          <button
            className='yellow-button'
            onClick={handleSubmit(handleSendFeedback)}
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactUs;
