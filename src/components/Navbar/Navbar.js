import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import Hamburger from 'hamburger-react';

import Logo from '../../assets/icons/KanapkaIcon.svg';
import Bag from '../../assets/icons/navbar_icons/shopping-bag.svg';

import firebase from './../../utils/Firebase';
import { useSession } from '../../hooks/useSession';
import { formatPrice } from './../../utils/foodData';
import QuantityButtons from './../../utils/QuantityButtons';
import { FoodBagContext } from '../../context/BagContext';

export const Navbar = ({
    orders,
    setOrders,
    removeItem,
    subtotal,
    getOrderPrice,
    history,
}) => {
    const user = useSession();
    const [isOpen, setOpen] = useState(false);
    const { isBagOpen, toggleBag, closeBag } = useContext(FoodBagContext);

    useEffect(() => {
      const linkTags = document.querySelectorAll('a');

      linkTags.forEach((linkTag) => {
         linkTag.addEventListener('click', (event) => closeBag());
      })
    }, [closeBag]);

    const incrementOrderItem = (index) => {
        const newOrders = [...orders];
        const targetedOrder = newOrders[index];
        targetedOrder.quantity++;
        setOrders(newOrders);
    };

    const decrementOrderItem = (index) => {
        const newOrders = [...orders];
        const targetedOrder = newOrders[index];
        targetedOrder.quantity--;
        setOrders(newOrders);
    };

    const signOut = () => {
        firebase
            .auth()
            .signOut()
            .then(() => history.push('/'))
            .catch((error) => console.log(error));
    };

    const ifAuth = user ? '/checkout' : '/sign-in';

    return (
        <>
            <nav className='navbar'>
                <Link to='/'>
                    <img src={Logo} alt='logo' />
                    <h1>Kanapka</h1>
                </Link>
                <span className='desktop'>
                    <ul className='navbar-links'>
                        <Link to='/about'>About</Link>
                        <Link to='/meun'>Menu</Link>
                        <Link to='/gallery'>Gallery</Link>
                        <Link to='/blog'>Blog</Link>
                        <Link to='/testimonials'>Testimonials</Link>
                        <Link to='/contact'>Contact</Link>
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
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </span>
            </nav>
            {isBagOpen ? (
                <div className='container'>
                    <div className='shopping-bag' id='shopping-bag'>
                        <ul className='shopping-bag-items'>
                            {orders.length === 0 ? (
                                <span>
                                    Your bag is empty, but I'm sure your hungry!
                                </span>
                            ) : (
                                orders.map((order, index) => (
                                    <li
                                        key={order.name}
                                        id={`order-item-li-${order.name}`}>
                                        <div className='item-info'>
                                            <div>
                                                <span>{order.name}</span>
                                                <span>
                                                    {formatPrice(
                                                        getOrderPrice(order)
                                                    )}
                                                </span>
                                            </div>
                                            {order.sauces && (
                                                <span className='item-sauces'>
                                                    {order.sauces
                                                        .map((sauce) => sauce)
                                                        .join(', ')}
                                                </span>
                                            )}
                                        </div>
                                        <div className='quantity-section'>
                                            <button
                                                className='remove-item-button'
                                                onClick={() =>
                                                    removeItem(order.name)
                                                }>
                                                Remove
                                            </button>
                                            <span>
                                                <div className='quantity-buttons'>
                                                    <QuantityButtons
                                                        quantity={
                                                            order.quantity
                                                        }
                                                        index={index}
                                                        incrementOrderItem={
                                                            incrementOrderItem
                                                        }
                                                        decrementOrderItem={
                                                            decrementOrderItem
                                                        }
                                                    />
                                                </div>
                                            </span>
                                        </div>
                                    </li>
                                ))
                            )}
                        </ul>
                        <Link to={ifAuth}>
                            <button
                                className='checkout-button'
                                disabled={orders.length === 0}>
                                Checkout
                            </button>
                        </Link>
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default withRouter(Navbar);
