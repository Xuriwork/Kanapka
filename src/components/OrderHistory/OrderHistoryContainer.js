import React, { useState, useEffect } from 'react';

import OrderHistory from './OrderHistory';
import Loading from '../Loading';

import firebase, { usersCollection } from '../../utils/Firebase';
import { useSession } from '../../hooks/useSession';

const OrderHistoryContainer = () => {
  const { user } = useSession();
  const userId = user.uid;
  const [orderHistory, setOrderHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('users')
      .doc(userId)
      .collection('orderHistory')
      .get()
      .then((snapshot) => {
        const _orderHistory = [];
        snapshot.forEach((doc) => {
          const order = doc.data();
          order.orderId = doc.id;
          _orderHistory.push(order);
        });
        setOrderHistory(_orderHistory);
        setLoading(false);
      });

    return () => unsubscribe;
  }, [userId]);

  if (loading) {
    return <Loading />;
  }

  return <OrderHistory orderHistory={orderHistory} />;
};

export default OrderHistoryContainer;
