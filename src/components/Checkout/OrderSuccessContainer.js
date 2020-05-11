import React from 'react';
import OrderSuccess from './OrderSuccess';

import { useStateValue } from '../../state/state';
import Loading from '../Loading';

export const OrderSuccessContainer = ({ history }) => {
    const [state] = useStateValue();

    if (!state.orderPlaced) history.push('/menu');

    const orderPlacedInfo = state.orderPlacedInfo;

    if (orderPlacedInfo === null) return <Loading />;

    return (
        <OrderSuccess {...orderPlacedInfo} />
    )
}

export default OrderSuccessContainer;