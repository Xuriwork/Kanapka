import React from 'react';
import { ReactComponent as Decrement } from '../assets/decrement.svg';
import { ReactComponent as Increment } from '../assets/increment.svg';

const QuantityButtons = ({ quantity, index, incrementOrderItem, decrementOrderItem }) => {
   return (
      <>
         {quantity.value ? (
            <>
               <button
                  disabled={quantity.value === 1}
                  onClick={() => quantity.setValue(quantity.value - 1)}>
                  <Decrement />
               </button>
               <span>{quantity.value}</span>
               <button
                  disabled={quantity.value === 9}
                  onClick={() => quantity.setValue(quantity.value + 1)}>
                  <Increment />
               </button>
            </>
         ) : (
            <>
               <button
                  disabled={quantity === 1}
                  onClick={() => decrementOrderItem(index)}>
                  <Decrement />
               </button>
               <span>{quantity}</span>
               <button
                  disabled={quantity === 9}
                  onClick={() => incrementOrderItem(index)}>
                  <Increment />
               </button>
            </>
         )}
      </>
   );
};

export default QuantityButtons;
