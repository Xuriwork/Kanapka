import React from 'react';
import { Link } from 'react-router-dom';

import GreenVan from '../../assets/images/van.svg';

export const OrderSuccess = () => {

    return (
        <div className='success-order-component'>
            <div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <h2>Thank you, your order has been placed.</h2>
                    <img style={{ width: '40px', marginLeft: '10px' }} src={GreenVan} alt='GreenVan' />
                </div>
                <p>
                    Please check your email for order confirmation and detailed
                    delivery information or visit the "Orders" section to track
                    the delivery.
                </p>
                <h5>Order Number: 621-8095421-3654332</h5>
                <ul>
                    <li>Hamburgers</li>
                    <li>Fries</li>
                </ul>
                <p style={{ marginTop: '10px' }} className='order-history'><Link to='/order-history'>Go to orders</Link></p>
            </div>
        </div>
    );
};

export default OrderSuccess;