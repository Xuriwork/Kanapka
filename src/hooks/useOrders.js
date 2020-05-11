import { useState, useEffect } from 'react';

export const useOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (sessionStorage.bagItems) {
      const sessionStorageItems = JSON.parse(sessionStorage.getItem('bagItems'));
      setOrders(sessionStorageItems);
    }
  }, []);

  useEffect(() => {
    if (orders) {
      const serializedItems = JSON.stringify(orders);
      sessionStorage.setItem('bagItems', serializedItems);
    }
  }, [orders]);

  const getOrderPrice = (order) => {
    if (order.sauces && order.sauces.length > 2)
      return order.quantity * order.price + 0.3;
    return order.quantity * order.price;
  };

  const removeItem = (itemName) => {
    setTimeout(() => {
      const newOrder = orders.filter((order) => !order.name.includes(itemName));
      return setOrders(newOrder);
    }, 700);
    const orderItem = document.getElementById(`order-item-li-${itemName}`);
    if (orderItem) orderItem.classList.add('removed');
  };

  const reducer = (itemTotal, currentOrder) => {
    return itemTotal + getOrderPrice(currentOrder);
  };

  const subtotal = orders.reduce(reducer, 0);
  const tax = subtotal * 0.07;
  const deliveryCost = subtotal + tax >= 20 ? 0 : 2.0;
  const total = subtotal + tax + deliveryCost;

  return {
    orders,
    setOrders,
    removeItem,
    subtotal,
    tax,
    total,
    getOrderPrice,
    deliveryCost,
  };
};

export default useOrders;
