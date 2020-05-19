import React, { useContext } from 'react';
import { FoodBagContext } from '../../context/BagContext';
import foods from '../../utils/foodData';
import { formatPrice } from '../../hooks/useOrders';
import { ReactComponent as StreakUnderline } from '../../assets/styled-underline.svg';
import Modal from '../Modals/ItemModal';
import { useTitle } from '../../hooks/useTitle';
import Skeleton from 'react-loading-skeleton';

const Menu = ({ orders, setOrders }) => {
  document.title = 'Kanapka - Menu';
  const [openFoodModal, setFoodModal] = React.useState(null);
  useTitle({ openFoodModal, orders });
  const { closeBag } = useContext(FoodBagContext);

  const handleFoodModal = (food) => {
    setFoodModal(food);
    closeBag();
  };

  return (
    <>
      <div className='header'>
        <h1>Our Menu</h1>
        <StreakUnderline />
      </div>
      <div className='menu-component'>
        <section className='cards'>
          {foods.map((food) => (
            <div
              key={food.name}
              className='card'
              onClick={() => handleFoodModal(food)}>
              {
                 <>
               <div
                className='card--img'
                style={{ backgroundImage: `url(${food.img})` }}></div>
               <div className='card--info'>
                <span className='card--category'>{food.section}</span>
                <h3 className='card--title'>{food.name}</h3>
              </div>
              </> || <Skeleton />}
            </div>
          ))}
          {openFoodModal ? (
            <Modal
              isVisible={openFoodModal}
              setFoodModal={setFoodModal}
              orders={orders}
              setOrders={setOrders}
              formatPrice={formatPrice}
            />
          ) : null}
        </section>
      </div>
    </>
  );
};

export default Menu;
