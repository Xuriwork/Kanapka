import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import PhoneInput, { getCountries } from 'react-phone-number-input';
import en from 'react-phone-number-input/locale/en.json';

import { formatPrice } from '../../hooks/useOrders';
import QuantityButtons from '../QuantityButtons';
import OrderProccessingModal from './OrderProcessingModal';
import RemoveItemModal from '../Modals/RemoveItemModal';
import Modal from '../Modals/Modal';

import 'react-phone-number-input/style.css';

export const Checkout = ({
   orders,
   getOrderPrice,
   subtotal,
   total,
   tax,
   deliveryCost,
   user: { userEmail, userId },
   removeItem,
   incrementOrderItem,
   decrementOrderItem,
   handleCheckout,
   isProcessing,
   confirmationModal,
   setConfirmationModal,
   history
}) => {

   const [isVisible, setVisible] = useState(false);
   const [phoneNumber, setPhoneNumber] = useState(null);
   const [allowCheckout, setAllowCheckout] = useState(deliveryCost !== 0);
   const { register, handleSubmit, watch, errors: formErrors } = useForm();

   const body = document.body;
   isVisible ? (body.style.overflow = 'hidden') : (body.style.overflow = 'auto');

   const handleCheckoutOrder = (data) => {
      if (allowCheckout) return setConfirmationModal(true);
      data.email = userEmail;
      data.userId = userId;
      data.phoneNumber = phoneNumber;
      const date = new Date();
      handleCheckout({ orderItems: orders, userInfo: data, date, total: total.toFixed(2) });
   };

   const handleOpenModal = (itemName) => {
      setVisible(itemName);
   };

   return (
      <div className='checkout-component'>
         <div className='checkout-cart-items'>
            <h2>Order Summary</h2>
            <div className='items-list'>
               <ul>
                  {orders &&
                     orders.map((order, index) => (
                        <li key={order.name}>
                           <span>
                              <span>
                                 <h2>{order.name}</h2>
                                 <span className='quantity-buttons'>
                                    <QuantityButtons
                                       quantity={order.quantity}
                                       index={index}
                                       incrementOrderItem={incrementOrderItem}
                                       decrementOrderItem={decrementOrderItem}
                                    />
                                    <span className='order-price-span'>
                                       &#128937;{' '}
                                       {formatPrice(getOrderPrice(order))}
                                    </span>
                                 </span>
                              </span>
                              <RemoveItemModal
                                 className='remove-item-button'
                                 visibleButtonName='&#10006;'
                                 buttonActionName='Remove'
                                 isVisible={isVisible}
                                 setVisible={setVisible}
                                 handleOpenModal={() =>
                                    handleOpenModal(order.name)
                                 }
                                 show={isVisible === order.name}
                                 itemName={order.name}
                                 buttonAction={removeItem}
                              />
                           </span>
                        </li>
                     ))}
               </ul>
            </div>
            <div className='discount-code-container'>
               <label htmlFor='discountCode'>Gift card/Discount code</label>
               <span>
                  <input
                     type='text'
                     id='discountCode'
                     name='discountCode'
                     ref={register}
                  />{' '}
                  <button>Apply</button>
               </span>
            </div>
            <div className='order-amount-section'>
               <div>
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
               </div>
               <div>
                  <span>Tax</span>
                  <span>{formatPrice(tax)}</span>
               </div>
               <div>
                  <span>Delivery</span>
                  {deliveryCost === 0 ? (
                     <span style={{ color: '#2cb978', fontWeight: 'bold' }}>
                        FREE
                     </span>
                  ) : (
                        <span>{formatPrice(deliveryCost)}</span>
                     )}
               </div>
               <div>
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
               </div>
            </div>
            <div className='desktop-checkout-container'>
               <button
                  className='checkout-button'
                  onClick={handleSubmit(handleCheckoutOrder)}>
                  Place order
               </button>
            </div>
         </div>
         <div>
            <form>
               <div className='input-group'>
                  <div className='heading-group'>
                     <span className='step-indicator'>1</span>
                     <h2>Your Email</h2>
                  </div>
                  <span className='user-email-span'>{userEmail}</span>
               </div>
               <div className='checkout-form-inner-div'>
                  <div className='heading-group'>
                     <span className='step-indicator'>2</span>
                     <h2>Delivery Information</h2>
                  </div>
                  <div
                     className='input-group-div'
                     style={{ marginBottom: '15px' }}>
                     <label htmlFor='firstname'>
                        Full Name <span className='required'>*</span>
                     </label>
                     <input
                        type='text'
                        name='firstName'
                        placeholder='First'
                        className='field-divided'
                        style={{ marginBottom: 0 }}
                        ref={register({
                           required: {
                              value: false,
                              message: 'This field is required',
                           },
                           pattern: {
                              value: /^[a-z ,.'-]+$/i,
                              message: 'This field is invalid',
                           },
                        })}
                     />{' '}
                     <input
                        type='text'
                        name='lastName'
                        placeholder='Last'
                        className='field-divided'
                        style={{ marginBottom: 0 }}
                        ref={register({
                           required: {
                              value: false,
                              message: 'This field is required',
                           },
                           pattern: {
                              value: /^[a-z ,.'-]+$/i,
                              message: 'This field is invalid',
                           },
                        })}
                     />
                     <div className='form-name-error-container'>
                        <div className='form-name-error'>
                           {formErrors.firstName && (
                              <span className='span-error-message'>
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
                  </div>
                  {watch('deliveryOptions') === 'delivery' ? (
                     <>
                        <div className='input-group-div'>
                           <label htmlFor='address'>
                              Address <span className='required'>*</span>
                           </label>
                           <input
                              type='text'
                              name='address'
                              id='address'
                              placeholder='Address'
                              className='field-long'
                              ref={register({
                                 required: {
                                    value: false,
                                    message: 'This field is required',
                                 },
                              })}
                           />
                           {formErrors.address && (
                              <span className='span-error-message'>
                                 {formErrors.address.message}
                              </span>
                           )}
                        </div>
                        <div className='input-group-div'>
                           <label htmlFor='country'>
                              Country <span className='required'>*</span>
                           </label>
                           <select
                              name='country'
                              id='country'
                              className='field-select'
                              ref={register({
                                 required: {
                                    value: false,
                                    message: 'This field is required',
                                 },
                              })}>
                              <option value='US'>{en['US']}</option>
                              {getCountries().map((country) => (
                                 <option key={country} value={country}>
                                    {en[country]}
                                 </option>
                              ))}
                           </select>
                        </div>
                        <div className='input-group-div'>
                           <label htmlFor='location'>
                              Location <span className='required'>*</span>
                           </label>
                           <input
                              type='number'
                              name='zipcode'
                              placeholder='Zipcode'
                              className='field-divided-thirds'
                              ref={register({
                                 required: {
                                    value: false,
                                    message: 'Zipcode is required',
                                 },
                              })}
                           />{' '}
                           <input
                              type='text'
                              name='city'
                              placeholder='City'
                              className='field-divided-thirds'
                              ref={register({
                                 required: {
                                    value: false,
                                    message: 'City is required',
                                 },
                              })}
                           />{' '}
                           <input
                              type='text'
                              name='state'
                              className='field-divided-thirds'
                              placeholder='State'
                              ref={register({
                                 required: {
                                    value: false,
                                    message: 'State is required',
                                 },
                              })}
                           />
                           <div className='location-input'>
                              {formErrors.zipcode && (
                                 <span className='span-error-message'>
                                    {formErrors.zipcode.message}
                                 </span>
                              )}
                              {formErrors.city && (
                                 <span className='span-error-message'>
                                    {formErrors.city.message}
                                 </span>
                              )}
                              {formErrors.state && (
                                 <span className='span-error-message'>
                                    {formErrors.state.message}
                                 </span>
                              )}
                           </div>
                        </div>
                     </>
                  ) : null}
                  <span>
                     <label htmlFor='phoneNumber'>
                        Phone Number <span className='required'>*</span>
                     </label>
                     <span className='phone-number-span'>
                        <PhoneInput
                           international
                           defaultCountry='US'
                           name='phoneNumber'
                           value={phoneNumber}
                           onChange={(inputValue) => setPhoneNumber(inputValue)}
                        />
                     </span>
                  </span>
                  <span>
                     <label htmlFor='customerOrderMessage'>
                        Special Order Message{' '}
                        <span style={{ color: '#686868' }}>(Optional)</span>
                     </label>
                     <textarea
                        name='customerOrderMessage'
                        id='customerOrderMessage'
                        placeholder='Would you like anything specific with your meal, like a note for a friend or something?'
                        className='field-long field-textarea'
                        ref={register}></textarea>
                  </span>
               </div>
               <div className='checkout-form-inner-div'>
                  <div className='heading-group'>
                     <span className='step-indicator'>3</span>
                     <h2>Delivery Options</h2>
                  </div>
                  <div className='delivery-options-container'>
                     <span>
                        <label htmlFor='deliveryOptions'>Delivery</label>
                        <input
                           id='delivery'
                           type='radio'
                           name='deliveryOptions'
                           value='delivery'
                           ref={register({ required: false })}
                        />
                     </span>
                     <span>
                        <label htmlFor='pickup'>Pickup</label>
                        <input
                           id='pickup'
                           type='radio'
                           name='deliveryOptions'
                           value='pickup'
                           ref={register({ required: false })}
                        />
                     </span>
                  </div>
               </div>
               <div className='checkout-form-inner-div mobile-checkout-container'>
                  <button
                     className='checkout-button'
                     onClick={handleSubmit(handleCheckoutOrder)}>
                     Place order
                  </button>
               </div>
            </form>
         </div>
         {isProcessing ? (
            <OrderProccessingModal isProcessing={isProcessing} />
         ) : confirmationModal ? <Modal
            header='Are you sure you want to checkout now?'
            subHeader='Free delivery on orders $15 and up.'
            setConfirmationModal={setConfirmationModal}
            buttonActionName='Checkout now'
            buttonAction={() => setAllowCheckout(false)}
            otherButtonActionName='Go to menu'
            otherButtonAction={() => history.push('/menu')}
            paragraphStyle={{color: 'var(--theme-color)'}} /> : null}
      </div>
   );
};

export default Checkout;
