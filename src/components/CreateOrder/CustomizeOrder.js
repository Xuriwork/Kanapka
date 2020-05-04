import React from 'react';

export const CustomizeOrder = ({ sauces, addSauce }) => {
   return (
      <>
         <hr />
         <h2>Dipping Sauces</h2>
         {sauces.map((sauce, index) => (
            <div key={sauce.name} className='inputGroup'>
               <input
                  id={sauce.name}
                  name={sauce.name}
                  type='checkbox'
                  value={sauce.name}
                  defaultChecked={sauce.checked}
                  onClick={() => addSauce(index)}
               />
               <label htmlFor={sauce.name}>
                  <img src={sauce.img} alt={sauce.name} />
                  <span>{sauce.name}</span>
               </label>
            </div>
         ))}
      </>
   );
};

export default CustomizeOrder;
