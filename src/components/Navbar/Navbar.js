import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/icons/KanapkaIcon.svg';
import Bag from '../../assets/icons/navbar_icons/shopping-bag.svg';
import Hamburger from 'hamburger-react';
import { ReactComponent as Decrement } from '../../assets/decrement.svg';
import { ReactComponent as Increment } from '../../assets/increment.svg';

export const Navbar = ({ orders, setOrders }) => {
   const [isOpen, setOpen] = useState(false);
   const [isBagOpen, setBagOpen] = useState(false);

   const openBag = () => {
      setBagOpen(!isBagOpen);
   }

   return (
      <>
         <nav className='navbar'>
            <Link to='/'>
               <img src={Logo} alt='logo' />
               <h1>Kanapka</h1>
            </Link>
            <span className='desktop'>
               <ul className='navbar-links'>
                  <li>About</li>
                  <li>Gallery</li>
                  <li>Popular Recipes</li>
                  <li>Testimonials</li>
                  <li>Contact Us</li>
               </ul>
               <span className='links'>
                  <Link to='/sign-up'>Sign Up</Link>
                  <Link to='/menu' className='create-an-order-link'>
                     Create an Order
                  </Link>
                  <span className='shopping-bag-span' onClick={openBag}>
                     <span>$13.00</span>
                     <img src={Bag} alt='bag' />
                  </span>
               </span>
            </span>
            <span className='mobile' style={{ marginLeft: 'auto' }}>
               <Hamburger toggled={isOpen} toggle={setOpen} />
            </span>
         </nav>
         {
         isBagOpen ?
         (<div className='container'>
            <div className='shopping-bag'>
               <ul className='shopping-bag-items'>
                  {orders.length === 0 ? (<span>Your bag is empty, but I'm sure your hungry!</span>) : (
                     orders.map((order) => (
                        console.log(order),
                        <li key={order.name}>
                           <div className='item-info'>
                              <span className='item-name'>{order.name}</span>
                              <span className='item-price'>{order.price}</span>
                           </div>
                           <div className='quantity-section'>
                              <button className='remove-item'>Remove</button>
                              <span>
                                 <div className='quantity-buttons'>
                                    <button disabled><Decrement/></button>
                                    <span>1</span>
                                    <button><Increment/></button>
                                 </div>
                              </span>
                           </div>
                        </li>
                     ))
                  )}
               </ul>
               <button
                  className='checkout-button'
                  disabled={orders.length === 0}>
                  Checkout
               </button>
            </div>
         </div>) : null}
      </>
   );
};

export default Navbar;
