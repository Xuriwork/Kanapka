import React, { useState } from 'react';

export const FoodBagContext = React.createContext();

export const FoodBagProvider = (props) => {
  const [isBagOpen, setBagOpen] = useState(false);

  const closeBag = () => {
    const shoppingBag = document.querySelector('#shopping-bag');
    if (shoppingBag) {
      shoppingBag.style.animation = 'fadeOut ease 0.3s';
    }
    setTimeout(() => {
      setBagOpen(false);
    }, 200);
  };

  const toggleBag = () => {
    if (!isBagOpen) {
      return setBagOpen(true);
    }
    closeBag();
  };

  return (
    <FoodBagContext.Provider value={{ isBagOpen, setBagOpen, toggleBag, closeBag }}>
      {props.children}
    </FoodBagContext.Provider>
  );
};

export default FoodBagContext;
