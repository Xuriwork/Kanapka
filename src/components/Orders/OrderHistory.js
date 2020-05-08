import React from 'react';
import dayjs from 'dayjs';

import { formatPrice } from '../../utils/foodData';

export const OrderHistory = ({ orderHistory }) => {
  return (
    <div className='order-history-component'>
      <h1>Order History</h1>
      <ul>
        {orderHistory &&
          orderHistory.map(({ date, order, orderId }) => (
            <li key={orderId}>
              <h3>
                Order Number: <span>#{orderId}</span>
              </h3>
              <div className='order-placed-info'>
                Order Placed on{' '}
                <span>
                  {dayjs(new Date(date)).format('dddd, MMMM D YYYY HH:mm:ss')}
                </span>
              </div>
              <div className='order-description'>
                {order.map(({ name, price, quantity }) => (
                  <div key={name}>
                    <div>
                      <span>Name: {name}</span>
                      <span> x{quantity}</span>
                    </div>
                    <span>Price: {formatPrice(price)}</span>
                  </div>
                ))}
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default OrderHistory;
