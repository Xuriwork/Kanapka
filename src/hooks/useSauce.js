import { useState } from 'react';
import { saucesList } from '../utils/foodData';

export const useSauce = (defaultTopping) => {

   const [sauces, setSauce] = useState(defaultTopping || getDefaultToppings());

   const addSauce = (index) => {
      const newSauces = [...sauces];
      newSauces[index].checked = !newSauces[index].checked;
      setSauce(newSauces);
   };

   return {
      sauces, addSauce
   };
};

const getDefaultToppings = () => {
   return saucesList.map((sauce) => ({
      name: sauce.name,
      img: sauce.img,
      checked: false
   })
)};
