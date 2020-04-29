import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/icons/KanapkaIcon.svg';
import Bag from '../../assets/icons/navbar_icons/shopping-bag.svg';
import Hamburger from 'hamburger-react';

export const Navbar = (props) => {
   const [isOpen, setOpen] = useState(false);

   return (
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
               <span to='cart' className='shopping-bag-span'>
                  <span>$13.00</span>
                  <img src={Bag} alt='cart' />
               </span>
            </span>
         </span>
         <span className='mobile' style={{ marginLeft: 'auto' }}>
            <Hamburger toggled={isOpen} toggle={setOpen} />
         </span>
      </nav>
   );
};

export default Navbar;
