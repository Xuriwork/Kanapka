import React from 'react';
import { ReactComponent as Decrement } from '../assets/decrement.svg';
import { ReactComponent as Increment } from '../assets/increment.svg';

export const Modal = React.memo((props) => {
   const { isVisible, updateField, orders, setOrders } = props;
   const body = document.body;
   console.log(orders)

   const closeModalHandler = () => {
      body.style.overflow = 'auto';
      const modalContainer = document.querySelector('.modal-content-container');
      if (modalContainer) {
         modalContainer.style.animation = 'hide 0.2s';
      }
      setTimeout(() => {
         props.setFoodModal(null);
      }, 100);
   };

   window.onclick = (event) => {
      const modal = document.getElementById('modal');
      if (event.target === modal) {
         closeModalHandler();
      }
   };

   const order = {
      name: isVisible.name,
      price: `${isVisible.price}`
   };

   const handleAddToOrder = () => {
      setOrders([...orders, order]);
      closeModalHandler();
   };

   return (
      <span>
         <>
            {isVisible ? (
               <div
                  style={{ display: isVisible ? 'flex' : 'none' }}
                  id='modal'
                  className='modal'>
                  <div className='modal-content-container'>
                     <div className='modal-header'>
                        <span>
                           <img src={isVisible.img} alt={isVisible.name} />
                           <h3>{isVisible.name}</h3>
                        </span>
                        <span>
                           <span>${isVisible.price.toFixed(2)}</span>
                           <button className='add-button' onClick={handleAddToOrder}>Add to Bag</button>
                        </span>
                     </div>
                     <div className='modal-content'>
                        <hr />
                        <h2>Quantity</h2>
                        <div className='quantity-section'>
                           <div>${isVisible.price.toFixed(2)}</div>
                           <div className='quantity-buttons'>
                              <button disabled name={isVisible.name}>
                                 <Decrement />
                              </button>
                              <span>1</span>
                              <button name={isVisible.name} onClick={() => {
                                 updateField(isVisible.name, 1);
                              }}>
                                 <Increment />
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            ) : null}
         </>
      </span>
   );
});

export default Modal;
