import React from 'react';
import OrderSuccess from './OrderSuccess';

import { useStateValue } from '../../state/state';

export const OrderSuccessContainer = () => {
    const [state] = useStateValue();

    const orderPlacedInfo = state.orderPlacedInfo;

    return (
        orderPlacedInfo && <OrderSuccess {...orderPlacedInfo} />
    )
}

export default OrderSuccessContainer;