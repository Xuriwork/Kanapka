import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import Checkout from './Checkout';
import { useSession } from '../../hooks/useSession';
import { useStateValue } from '../../state/state';

export const CheckoutContainer = ({ orders, getOrderPrice, subtotal, total, tax, setOrders, removeItem, deliveryCost, history }) => {
  const [state, dispatch] = useStateValue();
  const { user, headers } = useSession();
  const [isProcessing, setProcessing] = useState(false);
  const userEmail = user.email;
  const userId = user.uid;

  const incrementOrderItem = (index) => {
    const newOrders = [...orders];
    const targetedOrder = newOrders[index];
    targetedOrder.quantity++;
    setOrders(newOrders);
  };

  const decrementOrderItem = (index) => {
    const newOrders = [...orders];
    const targetedOrder = newOrders[index];
    targetedOrder.quantity--;
    setOrders(newOrders);
  };

  const handleCheckout = (data) => {
    setProcessing(true);
    axios
      .post('/checkout', data, { headers: headers })
      .then((res) => {
        setOrders([]);
        const { date, orderId, orderItems } = res.data;
        dispatch({ type: 'orderPlaced', payload: { date, orderId, orderItems }});
      })
      .then(() => {
        setProcessing(false);
        history.push('/order-success');
      })
      .catch((error) => console.error('error', error));
  };

    if (!orders || orders.length === 0) {
        return <Redirect to={{pathname:'/menu'}} />
    };

  return (
    <Checkout
      user={{ userEmail, userId }}
      orders={orders}
      getOrderPrice={getOrderPrice}
      subtotal={subtotal}
      total={total}
      tax={tax}
      incrementOrderItem={incrementOrderItem}
      decrementOrderItem={decrementOrderItem}
      removeItem={removeItem}
      deliveryCost={deliveryCost}
      handleCheckout={handleCheckout}
      isProcessing={isProcessing}
    />
  );
};

export default CheckoutContainer;
