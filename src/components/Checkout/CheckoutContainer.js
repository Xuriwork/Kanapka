import React from 'react';

import { Redirect } from 'react-router-dom';

import Checkout from './Checkout';
import { usersCollection, ordersCollection } from '../../utils/Firebase';
import { useSession } from '../../hooks/useSession';
import { useStateValue } from '../../state/state';

export const CheckoutContainer = ({ orders, getOrderPrice, subtotal, total, tax, setOrders, removeItem, deliveryCost, history }) => {

    const [state, dispatch] = useStateValue();
    const user = useSession();
    const userEmail = user.email;
    const userId = user.uid;

    const generateDate = () => {
        const now = new Date();

        const year = now.getFullYear();

        let month = now.getMonth() + 1;
        if (month < 10) {
            month = `0${month}`;
        }

        let day = now.getDate();
        if (day < 10) {
            day = `0${day}`;
        }

        return {
            full: `${year}-${month}-${day}`,
            monthYear: `${year}-${month}`,
        };
    };

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

    const handleCheckout = ({ order, userInfo }) => {
        const date = generateDate();

        usersCollection
            .doc(user.uid)
            .collection('orderHistory')
            .add({ date: order.date, order: order.orderItems });
            
        ordersCollection
            .doc(date.monthYear)
            .collection(date.full)
            .add({ date: order.date, userInfo, orderItems: order.orderItems })
            .then(() => {
                dispatch({ type: 'orderPlaced', payload: order });
                if (state.orderPlaced === true) history.push('/order-success');
            })
    };

    if (!orders || orders.length === 0) {
        return <Redirect to={{pathname:'/menu'}} />
    };

    console.log(state)

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
