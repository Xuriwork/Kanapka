import React from 'react';

export const RemoveItemModal = (props) => {
   const {
      show,
      isVisible,
      setVisible,
      handleOpenModal,
      itemName,
      buttonActionName,
      visibleButtonName,
   } = props;
   
   const closeModalHandler = () => {
      setVisible(false);
   };

   const actionHandler = () => {
      props.buttonAction(itemName);
      closeModalHandler();
   };

   window.onclick = (event) => {
      const modal = document.getElementById('modal');
      if (event.target === modal) {
         closeModalHandler();
      }
   };

   return (
      <span>
         <button className='remove-item-button' onClick={handleOpenModal}>
            {visibleButtonName}
         </button>
         {show && (
            <span
               style={{display: isVisible ? 'flex' : 'none'}}
               id='modal'
               className='modal'>
               <div className='modal-content-container remove-item-modal'>
                  <div className='modal-content'>
                     <h3>Are you sure you want to remove your {itemName}? </h3>
                     <div className='buttons-container'>
                        <button onClick={closeModalHandler}>Cancel</button>
                        <button
                           onClick={actionHandler}
                           className={props.buttonActionClassName}>
                           {buttonActionName}
                        </button>
                     </div>
                  </div>
               </div>
            </span>
         )}
      </span>
   );
};

export default RemoveItemModal;
