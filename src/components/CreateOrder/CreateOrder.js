import React, { useState } from 'react';
import foods from './../../utils/FoodData';
import { ReactComponent as StreakUnderline } from '../../assets/styled-underline.svg';
import Modal from './../../utils/Modal';

const CreateOrder = ({ orders, setOrders }) => {
   const [openFoodModal, setFoodModal] = React.useState();
   const [quantities, setQuantities] = useState({ });

   const handleFoodModal = (food) => {
      setFoodModal(food);
   };

   const updateField = (name, quantity) => {
      console.log(name, quantity)
      setQuantities({
         ...quantities,
         [name]: quantity,
      });
   };

   return (
      <>
         <div className='header'>
            <h1>Our Menu</h1>
            <StreakUnderline />
         </div>
         <div className='create-order-component'>
            <section className='cards'>
               {foods.map((food) => (
                  <div
                     key={food.name}
                     className='card'
                     onClick={() => handleFoodModal(food)}>
                     <div
                        className='card--img'
                        style={{ backgroundImage: `url(${food.img})` }}></div>
                     <div className='card--info'>
                        <span className='card--category'>{food.section}</span>
                        <h3 className='card--title'>{food.name}</h3>
                     </div>
                  </div>
               ))}
               {openFoodModal ? (
                  <Modal 
                     isVisible={openFoodModal} 
                     setFoodModal={setFoodModal} 
                     updateField={updateField} 
                     orders={orders}
                     setOrders={setOrders}
                  />
               ) : null}
            </section>
         </div>
      </>
   );
};

export default CreateOrder;
