import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import PhoneInput, { getCountries } from 'react-phone-number-input';
import en from 'react-phone-number-input/locale/en.json';

import { formatPrice } from '../../utils/foodData';
import QuantityButtons from '../../utils/QuantityButtons';

import 'react-phone-number-input/style.css';

export const Checkout = (props) => {
    const {
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
    } = props;
    const [phoneNumber, setPhoneNumber] = useState(null);
    const { register, handleSubmit } = useForm();

    const checkoutOrder = (data) => {
        data.email = userEmail;
        data.userId = userId;
        data.phoneNumber = phoneNumber;

        const order = { orderItems: orders, date: new Date() };
        handleCheckout({ order, userInfo: data });
    };

    const creditCardNumberRegex = /(^4[0-9]{12}(?:[0-9]{3})?$)|(^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$)|(3[47][0-9]{13})|(^3(?:0[0-5]|[68][0-9])[0-9]{11}$)|(^6(?:011|5[0-9]{2})[0-9]{12}$)|(^(?:2131|1800|35\d{3})\d{11}$)/;

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
                                                    incrementOrderItem={
                                                        incrementOrderItem
                                                    }
                                                    decrementOrderItem={
                                                        decrementOrderItem
                                                    }
                                                />
                                                <span className='order-price-span'>
                                                  &#128937;{' '}{formatPrice(getOrderPrice(order))}
                                                </span>
                                            </span>
                                        </span>
                                        <span
                                            onClick={() =>
                                                removeItem(order.name)
                                            }>
                                            &#10006;
                                        </span>
                                    </span>
                                </li>
                            ))}
                    </ul>
                </div>
                <div className='discount-code-container'>
                    <label htmlFor='discountCode'>
                        Gift card/Discount code
                    </label>
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
                        {
                          deliveryCost === 0 ? <span style={{ color: '#2cb978', fontWeight: 'bold' }}>FREE</span> : 
                          (<span>{formatPrice(deliveryCost)}</span>)
                        }
                    </div>
                    <div>
                        <span>Total</span>
                        <span>{formatPrice(total)}</span>
                    </div>
                </div>
                <div className='desktop-checkout-container'>
                    <button
                        className='checkout-button'
                        onClick={handleSubmit(checkoutOrder)}>
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
                        <span>
                            <label htmlFor='firstname'>
                                Full Name <span className='required'>*</span>
                            </label>
                            <input
                                type='text'
                                name='firstname'
                                placeholder='First'
                                className='field-divided'
                                ref={register({
                                    pattern: {
                                        value: /^[a-z ,.'-]+$/i,
                                        message: 'This field is invalid',
                                    },
                                })}
                            />{' '}
                            <input
                                type='text'
                                name='lastname'
                                placeholder='Last'
                                className='field-divided'
                                ref={register({
                                    required: {
                                        value: true,
                                        message: 'This field is required',
                                    },
                                    pattern: {
                                        value: /^[a-z ,.'-]+$/i,
                                        message: 'This field is invalid',
                                    },
                                })}
                            />
                        </span>
                        <span>
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
                                        value: true,
                                        message: 'This field is required',
                                    },
                                })}
                            />
                        </span>
                        <span>
                            <label htmlFor='country'>
                                Country <span className='required'>*</span>
                            </label>
                            <select
                                name='country'
                                id='country'
                                className='field-select'
                                ref={register({
                                    required: {
                                        value: true,
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
                        </span>
                        <span>
                            <label htmlFor='specialOrderMessage'>
                                Special Order Message{' '}
                                <span className='required'>*</span>
                            </label>
                            <textarea
                                name='message'
                                id='specialOrderMessage'
                                placeholder='Would you like anything specific with your meal, like a note for a friend or something?'
                                className='field-long field-textarea'
                                ref={register}></textarea>
                        </span>
                        <span>
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
                                        value: true,
                                        message: 'This field is required',
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
                                        value: true,
                                        message: 'This field is required',
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
                                        value: true,
                                        message: 'This field is required',
                                    },
                                })}
                            />
                        </span>
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
                                    onChange={(inputValue) =>
                                        setPhoneNumber(inputValue)
                                    }
                                />
                            </span>
                        </span>
                    </div>
                    <div className='checkout-form-inner-div'>
                        <div className='heading-group'>
                            <span className='step-indicator'>3</span>
                            <h2>Payment Details</h2>
                        </div>
                        <span>
                            <label htmlFor='cardholderName'>
                                Name on Card <span className='required'>*</span>
                            </label>
                            <input
                                type='text'
                                name='cardholderName'
                                id='cardholderName'
                                placeholder='Name on Card'
                                className='field-long'
                                ref={register({
                                    required: {
                                        value: true,
                                        message: 'This field is required',
                                    },
                                })}
                            />
                        </span>
                        <span>
                            <label htmlFor='cardNumber'>
                                Card Number <span className='required'>*</span>
                            </label>
                            <input
                                type='tel'
                                name='cardNumber'
                                id='cardNumber'
                                placeholder='Card Number'
                                pattern='[0-9]*'
                                className='field-long'
                                ref={register({
                                    required: {
                                        value: true,
                                        message: 'This field is required',
                                    },
                                    pattern: {
                                        value: creditCardNumberRegex,
                                        message: 'This is not a valid number',
                                    },
                                })}
                            />
                        </span>
                        <span
                            className='other-card-info-span'
                            style={{ marginTop: '15px' }}>
                            <span>
                                <label htmlFor='expirationDate'>
                                    Expiration Date{' '}
                                    <span className='required'>*</span>
                                </label>
                                <input
                                    type='month'
                                    name='expirationDate'
                                    id='expirationDate'
                                    placeholder='Expiration Date'
                                    min='2020-01'
                                    max='2040-12'
                                    className='field-long'
                                    ref={register({
                                        required: {
                                            value: true,
                                            message: 'This field is required',
                                        },
                                    })}
                                />
                            </span>
                            <span>
                                <label htmlFor='expirationDate'>
                                    CVV Code <span className='required'>*</span>
                                </label>
                                <input
                                    type='tel'
                                    name='cvvCode'
                                    id='cvvCode'
                                    placeholder='CVV'
                                    className='field-long'
                                    ref={register({
                                        required: {
                                            value: true,
                                            message: 'This field is required',
                                        },
                                    })}
                                />
                            </span>
                        </span>
                    </div>
                    <div className='checkout-form-inner-div mobile-checkout-container'>
                        <button
                            className='checkout-button'
                            onClick={handleSubmit(checkoutOrder)}>
                            Place order
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;
