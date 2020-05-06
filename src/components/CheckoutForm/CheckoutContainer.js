import React from 'react';

import Checkout from './Checkout';
import { usersCollection, ordersCollection } from '../../utils/Firebase';
import { useSession } from '../../hooks/useSession';

export const CheckoutContainer = ({
    orders,
    getOrderPrice,
    subtotal,
    total,
    tax,
    setOrders,
    removeItem,
    deliveryCost,
}) => {
    const user = useSession();
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

    const handleCheckout = ({ date, docDate, order, userInfo }) => {
        usersCollection
            .doc(user.uid)
            .collection('orderHistory')
            .add({ date: order.date, order: order.orderItems });
        ordersCollection
            .doc(date.monthYear)
            .collection(date.full)
            .add({ date: order.date, userInfo, orderItems: order.orderItems });
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
        />
    );
};

export default CheckoutContainer;
