import React from 'react';

import Hamburger from '../../assets/images/HomeAssets/hamburger.svg';
import Pizza from '../../assets/images/HomeAssets/pizza.svg';
import Shakes from '../../assets/images/HomeAssets/food_delivery_10.png';
import Fries from '../../assets/images/HomeAssets/fries.svg';
import Spaghetti from '../../assets/images/HomeAssets/spaghetti.svg';
import Taco from '../../assets/images/HomeAssets/taco.svg';

import PizzaMan from '../../assets/images/HomeAssets/pizza-man.png';
import WomanEatingBurger from '../../assets/images/HomeAssets/beautiful-young-healthy-woman-holds-tasty-big-burger.png';

import Star from '../../assets/images/HomeAssets/star.png';
import ShoppingBag from '../../assets/images/HomeAssets/shopping-bag.svg';
import PaymentIcons from '../../assets/images/HomeAssets/payment-icons.svg';
import SocialMediaIcons from '../../assets/images/HomeAssets/social-media-icons.svg';

import LocationMarker from '../../assets/images/HomeAssets/location-marker.png';
import ClockIcon from '../../assets/images/HomeAssets/clock.png';

import PizzaDeliveryManIcon from '../../assets/images/HomeAssets/pizza-delivery-man-icon.svg';
import TimerIcon from '../../assets/images/HomeAssets/timer.svg';
import BurgerIcon from '../../assets/images/HomeAssets/burger.svg';
import MealIcon from '../../assets/images/HomeAssets/meal.svg';

import ScrollDown from '../../assets/images/HomeAssets/scroll-down.svg';
import YellowPaint from '../../assets/images/HomeAssets/yellow-paint.svg';
import RedComma from '../../assets/images/HomeAssets/red-commas.svg';

import KanapkaLogo from '../../assets/icons/Kanapka-Logo-Black.png';

const Home = () => {
  return (
    <div className='main-site-container'>
      <div className='main-container'>
        <div className='main-container-inner'>
          <h1>Party Time!</h1>
          <div className='paint'>
            <p>
              Buy any 2 burgers and <br /> get 1.5L Pepsi Free
            </p>
          </div>
          <button className='cta-button'>
            order now<i className='gg-arrow-right'></i>
          </button>
        </div>
        <div className='scroll-down'>
          <img className='scroll-down-img' src={ScrollDown} alt='scroll-down' />
        </div>
      </div>

      <section className='food-section'>
        <h1>Want to eat?</h1>
        <img className='yellow-streak' src={YellowPaint} alt='Yellow streak' />
        <p>
          Try our Most Delicious food and it usually take minutes to deliver!
        </p>
        <div className='food-icons'>
          <div>
            <img src={Hamburger} alt='Hamburger' />
            Burger
          </div>
          <div>
            <img src={Pizza} alt='Pizza' />
            Pizza
          </div>
          <div>
            <img src={Fries} alt='Fries' />
            <p>Fast food</p>
          </div>
          <div>
            <img src={Shakes} alt='Shakes' />
            Shakes
          </div>
          <div>
            <img src={Taco} alt='Taco' />
            Taco
          </div>
          <div>
            <img className='spaghetti' src={Spaghetti} alt='Spaghetti' />
            Spaghetti
          </div>
        </div>
      </section>

      <section className='delivery-section'>
        <div>
          <img className='pizza-man' src={PizzaMan} alt='Pizza man' />
          <div className='paint-red'>
            <h1>
              We Guarantee <br /> 30 Minutes Delivery
            </h1>
          </div>
          <p>
            Having a meeting, working late at night and need an extra push?{' '}
            <br />
            Let us know and we will be there
          </p>
        </div>
      </section>
      <section className='popular-recipes-section food-section'>
        <h1>Our Most Popular Recipes</h1>
        <img className='yellow-streak' src={YellowPaint} alt='Yellow streak' />
        <p>
          Try our Most Delicious food and it usually take minutes to deliver!
        </p>
        <div className='recipes-container'>
          <div>
            <div></div>
            <div className='recipe-info-div'>
              <p>
                <img src={Star} alt='Star rating' />
                <span>7.5 Rating</span>
              </p>
              <p>Attribute Variation</p>
              <p>Chicken, tommato, green salad, pita...</p>
              <div>
                <button>
                  <img className='shopbag' src={ShoppingBag} alt='Shopbag' />
                  Add to Cart
                </button>
                <p>$10.99</p>
              </div>
            </div>
          </div>
          <div>
            <div></div>
            <div className='recipe-info-div'>
              <p>
                <img src={Star} alt='Star rating' />
                <span>7.5 Rating</span>
              </p>
              <p>Attribute Variation</p>
              <p>Chicken, tommato, green salad, pita...</p>
              <div>
                <button>
                  <img className='shopbag' src={ShoppingBag} alt='Shopbag' />
                  Add to Cart
                </button>
                <p>$10.99</p>
              </div>
            </div>
          </div>
          <div>
            <div></div>
            <div className='recipe-info-div'>
              <p>
                <img src={Star} alt='Star rating' />
                <span>7.5 Rating</span>
              </p>
              <p>Attribute Variation</p>
              <p>Chicken, tommato, green salad, pita...</p>
              <div>
                <button>
                  <img className='shopbag' src={ShoppingBag} alt='Shopbag' />
                  Add to Cart
                </button>
                <p>$10.99</p>
              </div>
            </div>
          </div>
          <div>
            <div></div>
            <div className='recipe-info-div'>
              <p>
                <img src={Star} alt='Star rating' />
                <span>7.5 Rating</span>
              </p>
              <p>Attribute Variation</p>
              <p>Chicken, tommato, green salad, pita...</p>
              <div>
                <button>
                  <img className='shopbag' src={ShoppingBag} alt='Shopbag' />
                  Add to Cart
                </button>
                <p>$10.99</p>
              </div>
            </div>
          </div>
          <div>
            <div></div>
            <div className='recipe-info-div'>
              <p>
                <img src={Star} alt='Star rating' />
                <span>7.5 Rating</span>
              </p>
              <p>Attribute Variation</p>
              <p>Chicken, tommato, green salad, pita...</p>
              <div>
                <button>
                  <img className='shopbag' src={ShoppingBag} alt='Shopbag' />
                  Add to Cart
                </button>
                <p>$10.99</p>
              </div>
            </div>
          </div>
          <div>
            <div></div>
            <div className='recipe-info-div'>
              <p>
                <img src={Star} alt='Star rating' />
                <span>7.5 Rating</span>
              </p>
              <p>Attribute Variation</p>
              <p>Chicken, tommato, green salad, pita...</p>
              <div>
                <button>
                  <img className='shopbag' src={ShoppingBag} alt='Shopbag' />
                  Add to Cart
                </button>
                <p>$10.99</p>
              </div>
            </div>
          </div>
        </div>
        <button className='menu-show-button'>Show our Menu</button>
      </section>
      <section className='happy-hours-section'>
        <div>
          <p>Happy Hours</p>
          <h3>Friday 5pm – 8pm</h3>
          <h3>40% off All premium pizzas</h3>
          <div className='yellow-divs'>
            <div>
              <div>30</div>
              <div>Days</div>
            </div>
            <div>
              <div>15</div>
              <div>Hours</div>
            </div>
            <div>
              <div>45</div>
              <div>Mins</div>
            </div>
            <div>
              <div>18</div>
              <div>Sec</div>
            </div>
          </div>
        </div>
      </section>
      <section className='testimonial-section food-section'>
        <h1>Client Testimonials</h1>
        <img className='yellow-streak' src={YellowPaint} alt='Yellow streak' />
        <p>
          Try our Most Delicious food and it usually take minutes to deliver!
        </p>
        <div className='testimonial-div'>
          <div>
            <img
              src={WomanEatingBurger}
              alt='Happy lady eating our tasty burger'
            />
          </div>
          <div className='quote-div'>
            <img
              className='comma-img'
              src={RedComma}
              alt='Red commas'
            />
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <h4>
              Nina Margaret
              <hr className='hr' />
            </h4>
            <h5>CEO, Abc Company</h5>
          </div>
        </div>
      </section>
      <section className='benefits-section'>
        <div>
          <img
            src={PizzaDeliveryManIcon}
            alt='Pizza Delivery Guy'
          />
          <p>
            Free shipping on <br /> first order
          </p>
          <p>Sign up for updates and get free shipping</p>
        </div>
        <div>
          <img src={TimerIcon} alt='Timer' />
          <p>
            30 minutes <br /> delivery
          </p>
          <p>
            Everything you order will <br />
            be quickly delivered to <br />
            your door.
          </p>
        </div>
        <div>
          <img src={BurgerIcon} alt='Burger' />
          <p>
            Best quality <br /> guarantee
          </p>
          <p>
            We use only the best <br />
            ingredients to cook the <br />
            tasty fresh food for you.
          </p>
        </div>
        <div>
          <img
            src={MealIcon}
            alt='Collection of food items'
          />
          <p>
            Variety of <br /> dishes
          </p>
          <p>
            In our menu you’ll find a wide <br />
            variety of dishes, desserts, and <br />
            drinks.
          </p>
        </div>
      </section>

      <section className='contact-section'>
        <div className='contact-div'>
          <button>Call us</button>
          <h1>1-234-567-890</h1>
          <div>
            <img
              className='clock'
              src={ClockIcon}
              alt='Clock icon'
            />
            <p>
              Mon-Thu: 11.00 – 23.00 <br />
              Sat: 12.00 – 23.00 | sun: 12.00 – 21.00
            </p>
          </div>
          <div>
            <img
              className='location'
              src={LocationMarker}
              alt='Location marker icon'
            />
            <p>
              123 East 456th Street, <br />
              New York City NY 10065
            </p>
          </div>
          <img
            className='socials'
            src={SocialMediaIcons}
            alt=''
          />
        </div>
        <div></div>
      </section>
      <section className='our-info-section'>
        <div>
          <div className='kanapka-branding'>
            <img
              className='logo'
              src={KanapkaLogo}
              alt='Kanapka'
            />
          </div>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
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
      </section>
      <span className='copyright'>© 2019, Kanapka. All rights reserved</span>
    </div>
  );
};

export default Home;
