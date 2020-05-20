import React, { useContext } from 'react';
import { FoodBagContext } from '../../context/BagContext';
import { useQuantity, usePieces } from '../../hooks/useQuantity';
import { useSauce } from '../../hooks/useSauce';
import CustomizeOrder from '../CreateOrder/CustomizeOrder';
import QuantityButtons from '../QuantityButtons';

export const Modal = (props) => {
  const { isVisible, orders, setOrders, formatPrice, setFoodModal } = props;
  const { setBagOpen } = useContext(FoodBagContext);

  const quantity = useQuantity(isVisible && isVisible.quantity);
  const pieces = usePieces(isVisible && isVisible.pieces);
  const allSauces = useSauce(isVisible.sauces);

  const closeModalHandler = () => {
    const modalContainer = document.querySelector('.modal-content-container');
    if (modalContainer) modalContainer.style.animation = 'hide 0.2s';
    setTimeout(() => {
      setFoodModal(null);
    }, 100);
  };

  window.onclick = (event) => {
    const modal = document.getElementById('modal');
    if (event.target === modal) closeModalHandler();
  };

  const hasSauceAttribute = (food) => {
    return food.tags.includes('includes-sauces');
  };

  const filterSelectedSauces = allSauces.sauces.filter((sauce) => sauce.checked);
  const filterSelectedSaucesNames = filterSelectedSauces.map((sauce) => sauce.name);

  const order = {
    name: isVisible.name,
    price: isVisible.price,
    quantity: quantity.value,
    ...(isVisible.pieces && { pieces: pieces.value }),
    ...(hasSauceAttribute(isVisible) && { sauces: filterSelectedSaucesNames }),
  };

  const itemAlreadyExists = (orders, order) => {
    const item = orders.some((item) => item.name === order.name);
    if (item) return true;
  };

  const handleAddToOrder = () => {
    if (itemAlreadyExists(orders, order)) {
      closeModalHandler();
      return setBagOpen(true);
    }
    setOrders([...orders, order]);
    closeModalHandler();
    setBagOpen(true);
  };

  const setOrderPrice = () => {
    if (isVisible.pieces && pieces.value === 8) order.price = 2.99;
    if (filterSelectedSauces.length > 2)
      return order.quantity * order.price + 0.3;
    return order.quantity * order.price;
  };

  const onInputChanged = (e) => pieces.setValue(Number(e.currentTarget.value));

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
                  <span>{formatPrice(setOrderPrice(order))}</span>
                  <button className='add-button' onClick={handleAddToOrder}>
                    Add to Bag
                  </button>
                </span>
              </div>
              <div className='modal-content'>
                {Object.keys(isVisible).indexOf('pieces') >= 0 ? (
                  <>
                    <h2>Pieces</h2>
                    <div className='inputGroup'>
                      <input
                        id='four-pieces'
                        name='pieces'
                        type='radio'
                        value={4}
                        onChange={onInputChanged}
                        defaultChecked
                      />
                      <label htmlFor='four-pieces'>4 Pieces</label>
                    </div>
                    <div className='inputGroup'>
                      <input
                        id='eight-pieces'
                        name='pieces'
                        type='radio'
                        value={8}
                        onChange={onInputChanged}
                      />
                      <label htmlFor='eight-pieces'>8 Pieces</label>
                    </div>
                    <hr />
                  </>
                ) : null}
                <h2>Quantity</h2>
                <div className='quantity-section'>
                  <div>{formatPrice(setOrderPrice(order))}</div>
                  <div className='quantity-buttons'>
                    <QuantityButtons quantity={quantity} />
                  </div>
                </div>
                {hasSauceAttribute(isVisible) && (
                  <CustomizeOrder {...allSauces} />
                )}
              </div>
            </div>
          </div>
        ) : null}
      </>
    </span>
  );
};

export default Modal;
