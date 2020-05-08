import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import axios from 'axios';

import Checkout from './Checkout';
import { useSession } from '../../hooks/useSession';
import { useStateValue } from '../../state/state';

export const CheckoutContainer = ({ orders, getOrderPrice, subtotal, total, tax, setOrders, removeItem, deliveryCost, history }) => {
    const [state, dispatch] = useStateValue();
    const [isProcessing, setProcessing] = useState(false);
    const { user, token } = useSession();
    const userEmail = user.email;
    const userId = user.uid;

    useEffect(() => {
        if (state.orderPlaced === true) history.push('/order-success');
    }, [history, state]);

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

    const headers = {
        Authorization: `Bearer ${token}`
    };

    const handleCheckout = (data) => {
        setProcessing(true);
        return axios.post('/checkout', data, {headers: headers})
        .then((res) => {
            console.log(res.data);
            const { date, orderId, orderItems } = res.data;
            dispatch({ type: 'orderPlaced', payload: {date, orderId, orderItems} });
            setProcessing(false);
            setOrders([]);
        })
        .catch((error) => console.error('error', error))
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
            isProcessing={isProcessing}
        />
    );
};

export default CheckoutContainer;
