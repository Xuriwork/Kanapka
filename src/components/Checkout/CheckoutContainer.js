import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import Checkout from './Checkout';
import { useSession } from '../../hooks/useSession';
import { useStateValue } from '../../state/state';

export const CheckoutContainer = ({
  orders,
  getOrderPrice,
  subtotal,
  total,
  tax,
  setOrders,
  removeItem,
  deliveryCost,
  incrementOrderItem,
  decrementOrderItem,
  history,
}) => {
  
  const [, dispatch] = useStateValue();
  const { user, headers } = useSession();
  const [isProcessing, setProcessing] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(false);
  const userEmail = user.email;
  const userId = user.uid;

  const handleCheckout = (data) => {
    setProcessing(true);
    axios
      .post('/checkout', data, { headers: headers })
      .then((res) => {
        const { date, orderId, orderItems, total } = res.data;
        dispatch({
          type: 'orderPlaced',
          payload: { date, orderId, orderItems, total },
        });
      })
      .then(() => {
        setOrders([]);
        setProcessing(false);
        history.push('/order-success');
      })
      .catch((error) => console.error('error', error));
  };

  if (!orders || orders.length === 0) {
    return <Redirect to={{ pathname: '/menu' }} />;
  }

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
      confirmationModal={confirmationModal}
      setConfirmationModal={setConfirmationModal}
      history={history}
    />
  );
};

export default CheckoutContainer;
