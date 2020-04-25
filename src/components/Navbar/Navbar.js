import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/icons/KanapkaIcon.svg';
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
            <span>
               <span className='button-link'>
                  <Link to='create-an-order'>
                     <button>Create an Order</button>
                  </Link>
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
