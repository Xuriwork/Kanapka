import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import Hamburger from 'hamburger-react';
import Menu from 'react-burger-menu/lib/menus/push';

import Logo from '../assets/icons/KanapkaIcon.svg';
import Bag from '../assets/icons/navbar_icons/shopping-bag.svg';

import firebase from '../utils/Firebase';
import { formatPrice } from '../hooks/useOrders';
import QuantityButtons from './Misc/QuantityButtons';
import { FoodBagContext } from '../context/BagContext';
import RemoveItemModal from './Modals/RemoveItemModal';

export const Navbar = ({
  user,
  orders,
  setOrders,
  incrementOrderItem,
  decrementOrderItem,
  removeItem,
  subtotal,
  getOrderPrice,
  history,
}) => {
  const { isBagOpen, toggleBag, closeBag } = useContext(FoodBagContext);
  const checkoutIfAuth = user ? '/checkout' : '/sign-in';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setVisible] = useState(false);

  const body = document.body;
  isVisible ? body.style.overflow = 'hidden' : body.style.overflow = 'auto';

  useEffect(() => {
    const linkTags = document.querySelectorAll('a');
    linkTags.forEach((linkTag) => {
      linkTag.addEventListener('click', (event) => {
        setMobileMenuOpen(false);
        closeBag();
      });
    });
  }, [closeBag]);

  const signOut = () => {
    closeBag();
    firebase
      .auth()
      .signOut()
      .then(() => history.push('/menu'))
      .catch((error) => console.log(error));
  };

  const handleOpenModal = (itemName) => {
    setVisible(itemName);
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/'>
          <img src={Logo} alt='logo' />
          <h1>Kanapka</h1>
        </Link>
        <span className='desktop'>
          <ul className='navbar-links'>
            <li><Link to='/about-us'>About</Link></li>
            <li><Link to='/menu'>Menu</Link></li>
            <li><Link to='/gallery'>Gallery</Link></li>
            <li><Link to='/blog'>Blog</Link></li>
            <li><Link to='/contact-us'>Contact</Link></li>
            {user && <li><Link to='/order-history'>Order History</Link></li>}
          </ul>
          <span className='action-links'>
            {user ? (
              <button onClick={signOut}>Sign Out</button>
            ) : (
              <Link to='/sign-up'>Sign Up</Link>
            )}
            <Link to='/menu' className='create-an-order-link'>
              Create an Order
            </Link>
            <span className='shopping-bag-span' onClick={toggleBag}>
              <span>{formatPrice(subtotal)}</span>
              <img src={Bag} alt='bag' />
            </span>
          </span>
        </span>
        <span className='mobile' style={{ marginLeft: 'auto' }}>
          <Hamburger toggled={mobileMenuOpen} toggle={setMobileMenuOpen} />
        </span>
      </nav>
      {isBagOpen && (
        <div className='container'>
          <div className='shopping-bag' id='shopping-bag'>
            <ul className='shopping-bag-items'>
              {orders.length === 0 ? (
                <span>Your bag is empty, but I'm sure you're hungry!</span>
              ) : (
                orders.map((order, index) => (
                  <li key={order.name} id={`order-item-li-${order.name}`}>
                    <div className='item-info'>
                      <div>
                        <span>{order.name}</span>
                        <span>{formatPrice(getOrderPrice(order))}</span>
                      </div>
                      {order.sauces && (
                        <span className='item-sauces'>
                          {order.sauces.map((sauce) => sauce).join(', ')}
                        </span>
                      )}
                    </div>
                    <div className='quantity-section'>
                        <RemoveItemModal
                          className='remove-item-button'
                          visibleButtonName='Remove'
                          buttonActionName='Remove'
                          isVisible={isVisible}
                          setVisible={setVisible}
                          handleOpenModal={() => handleOpenModal(order.name)}
                          show={isVisible === order.name}
                          itemName={order.name}
                          buttonAction={removeItem}
                        />
                      <span>
                        <div className='quantity-buttons'>
                          <QuantityButtons
                            quantity={order.quantity}
                            index={index}
                            incrementOrderItem={incrementOrderItem}
                            decrementOrderItem={decrementOrderItem}
                          />
                        </div>
                      </span>
                    </div>
                  </li>
                ))
              )}
            </ul>
            <Link to={checkoutIfAuth}>
              <button
                className='checkout-button'
                disabled={orders.length === 0}>
                Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
      <div className='floating-button' onClick={toggleBag}>{formatPrice(subtotal)}</div>
      <Menu isOpen={mobileMenuOpen} width={'60%'} onStateChange={(state) => setMobileMenuOpen(state.isOpen)}>
        <ul>
          {user ? (
            <li onClick={signOut}>Sign Out</li>
          ) : (
            <li><Link to='/sign-up'>Sign Up</Link></li>
          )}
          <li><Link to='/menu'>Create an Order</Link></li>
          <li>{user && <Link to='/order-history'>Order History</Link>}</li>
          <li><Link to='/about-us'>About</Link></li>
          <li><Link to='/gallery'>Gallery</Link></li>
          <li><Link to='/blog'>Blog</Link></li>
          <li><Link to='/contact-us'>Contact</Link></li>
        </ul>
      </Menu>
    </>
  );
};

export default withRouter(Navbar);
