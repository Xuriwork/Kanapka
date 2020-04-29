import React, { useReducer } from 'react';
import foods from './../utils/FoodData';
import { ReactComponent as StreakUnderline } from '../../assets/styled-underline.svg';
import Modal from './../utils/Modal';

const reducer = (state, action) => {
   switch (action.type) {
      case 'open-modal':
         return { item: [...state.item, action.item] }
      default: 
         return state;
   }
};

const CreateOrder = () => {
   const [openFoodModal, setFoodModal] = React.useState();
   const [state, dispatch] = useReducer(reducer, { item: [] });

   const handleFoodModal = (food) => {
      setFoodModal(food);
      dispatch({ type: 'open-modal', item: food });
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
                  <div key={food.name} className='card' onClick={() => handleFoodModal(food)}>
                     <div
                        className='card--img'
                        style={{ backgroundImage: `url(${food.img})` }}></div>
                     <div className='card--info'>
                        <span className='card--category'>{food.section}</span>
                        <h3 className='card--title'>{food.name}</h3>
                     </div>
                  </div>
               ))}
               <Modal isVisible={openFoodModal} setFoodModal={setFoodModal} />
            </section>
         </div>
      </>
   );
};

export default CreateOrder;
