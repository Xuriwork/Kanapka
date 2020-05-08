import React, { useState, useEffect } from 'react';

import OrderHistory from './OrderHistory';
import Loading from '../../utils/Loading';

import { usersCollection } from '../../utils/Firebase';
import { useSession } from '../../hooks/useSession';

const OrderHistoryContainer = () => {
  const { user } = useSession();
  const [orderHistory, setOrderHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const userId = user.uid;

  useEffect(() => {
    usersCollection
      .doc(userId)
      .collection('orderHistory')
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          const _orderHistory = [];
          const order = doc.data();
          order.orderId = doc.id;
          _orderHistory.push(order);
          setOrderHistory(_orderHistory);
          setLoading(false);
        });
      });
  }, [userId]);

  if (loading) {
    return <Loading />;
  }

  return <OrderHistory orderHistory={orderHistory} />;
};

export default OrderHistoryContainer;
