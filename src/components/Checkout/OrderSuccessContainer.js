import React from 'react';
import OrderSuccess from './OrderSuccess';

import { useStateValue } from '../../state/state';
import Loading from '../../utils/Loading';

export const OrderSuccessContainer = () => {
    const [state] = useStateValue();

    const orderPlacedInfo = state.orderPlacedInfo;

    if (state.orderPlacedInfo === null) return <Loading />;

    return (
        <OrderSuccess {...orderPlacedInfo} />
    )
}

export default OrderSuccessContainer;