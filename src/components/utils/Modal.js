import React from 'react';
import Decrement from '../../assets/decrement.svg';
import Increment from '../../assets/increment.svg';

export const Modal = React.memo((props) => {
   const { isVisible } = props;
   const body = document.body;

   const closeModalHandler = () => {
      body.style.overflow = 'auto';
      props.setFoodModal(null);
   };

   window.onclick = (event) => {
      const modal = document.getElementById('modal');
      if (event.target === modal) {
         closeModalHandler();
      }
   };

   return (
      <span>
         <>
            {props.isVisible ? (
               <div
                  style={{ display: props.isVisible ? 'flex' : 'none' }}
                  id='modal'
                  className='modal'>
                  <div className='modal-content-container'>
                     <div className='modal-header'>
                        <span>
                           <img src={isVisible.img} alt={isVisible.name} />
                           <h3>{isVisible.name}</h3>
                        </span>
                        <span>
                           <span>$1.00</span>
                           <button className='add-button'>Add to Bag</button>
                        </span>
                     </div>
                     <div className='modal-content'>
                        <hr />
                        <h2>Quantity</h2>
                        <div className='quantity-section'>
                           <div>$1.00</div>
                           <div className='quantity-buttons'>
                              <button>
                                 <img src={Decrement} alt='decrement item' />
                              </button>
                              <span>1</span>
                              <button>
                                 <img
                                    src={Increment}
                                    alt='increment item'
                                    className='increment-item'
                                 />
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
