import React, { useState, useEffect } from 'react';

import OrderHistory from './OrderHistory';
import Loading from '../Loading';

import { usersCollection } from '../../utils/Firebase';
import { useSession } from '../../hooks/useSession';

const OrderHistoryContainer = () => {
  const { user } = useSession();
  const userId = user.uid;
  const [orderHistory, setOrderHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = usersCollection
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

  if (loading) return <Loading />;

  const filteredHistory = orderHistory.sort((a, b) => {
    return new Date(a.date) - new Date(a.date)
  });
  const filteredHistoryy = orderHistory.sort((a, b) => {
    return new Date(a.date) - new Date(b.date);
  });

  console.log(filteredHistory);
  console.log(filteredHistoryy);

  return <OrderHistory orderHistory={orderHistory} />;
};

export default OrderHistoryContainer;
