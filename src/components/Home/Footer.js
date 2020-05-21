import React from 'react';
import Logo from '../../assets/icons/KanapkaIcon.svg';
import PaymentIcons from '../../assets/images/HomeAssets/payment-icons.svg';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div>
        <div className='kanapka-branding'>
          <img src={Logo} alt='logo' />
          <h1>Kanapka</h1>
        </div>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
        <img
          className='payments'
          src={PaymentIcons}
          alt='Forms of payment icons'
        />
      </div>
      <div>
        <h2>USEFUL LINKS</h2>
        <table>
          <tbody>
            <tr>
              <td>About</td>
              <td>Wishlist</td>
            </tr>
            <tr>
              <td>Menu</td>
              <td>Privacy Policy</td>
            </tr>
            <tr>
              <td>Testimonials</td>
              <td>Order Tracking</td>
            </tr>
            <tr>
              <td>Contact Us</td>
              <td>Warranty and Services</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h2>INSTAGRAM FEED</h2>
        <div className='instagram-feed'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <span className='copyright'>© 2019, Kanapka. All rights reserved</span>
    </footer>
  );
};

export default Footer;
