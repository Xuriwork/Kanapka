import React from 'react';

const OrderProcessingModal = () => {
  document.body.style.overflow = 'hidden';
  
  return (
    <div className='modal'>
      <div
        className='modal-content-container order-procesing-modal'>
        <span>Your order is processing, please wait</span>
        <div className='spinner'>
          <div className='rect1'></div>
          <div className='rect2'></div>
          <div className='rect3'></div>
          <div className='rect4'></div>
          <div className='rect5'></div>
        </div>
      </div>
    </div>
  );
};

export default OrderProcessingModal;
