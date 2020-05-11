import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/icons/KanapkaIcon.svg';

const IMG = (imgName) => require(`../../assets/images/HomeAssets/${imgName}`);

const Home = () => {
   return (
      <div className='main-site-container'>
         <div className='main-container'>
            <div className='main-container-inner'>
               <div>
                  <h2>Most Popular</h2>
                  <h1>Ultimate Cheeseburger</h1>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum <br />
                   dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                  <Link to='/menu'>
                     <button className='cta-button'>
                        order now<i className='gg-arrow-right'></i>
                     </button>
                  </Link>
               </div>
               <div>
                  <img src={IMG('Burger-Transparent-Images.png')} alt='Tasty burger' />
               </div>
            </div>
         </div>

         <section className='important-section' style={{ padding: '60px 0' }}>
            <h1>Want to eat?</h1>
            <img
               className='yellow-streak'
               src={IMG('yellow-paint.svg')}
               alt='Yellow streak'
            />
            <p>
               Try our Most Delicious food and it usually take minutes to
               deliver!
            </p>
            <div className='food-icons'>
               <div>
                  <img src={IMG('hamburger.svg')} alt='Hamburger' />
                  Burger
               </div>
               <div>
                  <img src={IMG('pizza.svg')} alt='Pizza' />
                  Pizza
               </div>
               <div>
                  <img src={IMG('fries.svg')} alt='Fries' />
                  <p>Fast food</p>
               </div>
               <div>
                  <img src={IMG('food_delivery_10.png')} alt='Shakes' />
                  Shakes
               </div>
               <div>
                  <img src={IMG('taco.svg')} alt='Taco' />
                  Taco
               </div>
               <div>
                  <img className='spaghetti' src={IMG('spaghetti.svg')} alt='Spaghetti' />
                  Spaghetti
               </div>
            </div>
         </section>

         <section className='delivery-section'>
            <div>
               <img className='pizza-man' src={IMG('pizza-man.png')} alt='Pizza man' />
               <div className='paint-red'>
                  <h1>
                     We Guarantee <br /> 30 Minutes Delivery
                  </h1>
               </div>
               <p>
                  Having a meeting, working late at night and need an extra
                  push? <br />
                  Let us know and we will be there
               </p>
            </div>
         </section>
         <section className='popular-recipes-section important-section'>
            <h1>Our Most Popular Recipes</h1>
            <img
               className='yellow-streak'
               src={IMG('yellow-paint.svg')}
               alt='Yellow streak'
            />
            <p>
               Try our Most Delicious food and it usually take minutes to
               deliver!
            </p>
            <div className='recipes-container'>
               <div>
                  <div></div>
                  <div className='recipe-info-div'>
                     <p>
                        <img src={IMG('star.png')} alt='Star rating' />
                        <span>7.5 Rating</span>
                     </p>
                     <p>Attribute Variation</p>
                     <p>Pizza with olives, basil, mushrooms...</p>
                     <div>
                        <button>
                           <img
                              className='shopbag'
                              src={IMG('shopping-bag.svg')}
                              alt='Shopbag'
                           />
                           Add to Cart
                        </button>
                        <p>$6.00</p>
                     </div>
                  </div>
               </div>
               <div>
                  <div></div>
                  <div className='recipe-info-div'>
                     <p>
                        <img src={IMG('star.png')} alt='Star rating' />
                        <span>7.5 Rating</span>
                     </p>
                     <p>Attribute Variation</p>
                     <p>Burger with sliced pickles, lettuce, ranch...</p>
                     <div>
                        <button>
                           <img
                              className='shopbag'
                              src={IMG('shopping-bag.svg')}
                              alt='Shopbag'
                           />
                           Add to Cart
                        </button>
                        <p>$3.29</p>
                     </div>
                  </div>
               </div>
               <div>
                  <div></div>
                  <div className='recipe-info-div'>
                     <p>
                        <img src={IMG('star.png')} alt='Star rating' />
                        <span>7.5 Rating</span>
                     </p>
                     <p>Attribute Variation</p>
                     <p>Burger and a side of fries with pickles...</p>
                     <div>
                        <button>
                           <img
                              className='shopbag'
                              src={IMG('shopping-bag.svg')}
                              alt='Shopbag'
                           />
                           Add to Cart
                        </button>
                        <p>$3.29</p>
                     </div>
                  </div>
               </div>
               <div>
                  <div></div>
                  <div className='recipe-info-div'>
                     <p>
                        <img src={IMG('star.png')} alt='Star rating' />
                        <span>7.5 Rating</span>
                     </p>
                     <p>Attribute Variation</p>
                     <p>Chicken, tommato, green salad, pita...</p>
                     <div>
                        <button>
                           <img
                              className='shopbag'
                              src={IMG('shopping-bag.svg')}
                              alt='Shopbag'
                           />
                           Add to Cart
                        </button>
                        <p>$2.00</p>
                     </div>
                  </div>
               </div>
               <div>
                  <div></div>
                  <div className='recipe-info-div'>
                     <p>
                        <img src={IMG('star.png')} alt='Star rating' />
                        <span>7.5 Rating</span>
                     </p>
                     <p>Attribute Variation</p>
                     <p>Chicken sandwich with tommato, basil...</p>
                     <div>
                        <button>
                           <img
                              className='shopbag'
                              src={IMG('shopping-bag.svg')}
                              alt='Shopbag'
                           />
                           Add to Cart
                        </button>
                        <p>$1.69</p>
                     </div>
                  </div>
               </div>
               <div>
                  <div></div>
                  <div className='recipe-info-div'>
                     <p>
                        <img src={IMG('star.png')} alt='Star rating' />
                        <span>7.5 Rating</span>
                     </p>
                     <p>Attribute Variation</p>
                     <p>Chicken, tommato, green salad, pita...</p>
                     <div>
                        <button>
                           <img
                              className='shopbag'
                              src={IMG('shopping-bag.svg')}
                              alt='Shopbag'
                           />
                           Add to Cart
                        </button>
                        <p>$1.69</p>
                     </div>
                  </div>
               </div>
            </div>
            <button className='menu-show-button'>Show our Menu</button>
         </section>
         <section className='happy-hours-section'>
            <div>
               <h3>Happy Hours</h3>
               <p>Friday 5pm – 8pm</p>
               <p>40% off All premium pizzas</p>
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
         <section className='important-section testimonial-section'>
            <h1>Client Testimonials</h1>
            <img
               className='yellow-streak'
               src={IMG('yellow-paint.svg')}
               alt='Yellow streak'
            />
            <p style={{ marginBottom: 50 }}>
               Try our Most Delicious food and it usually take minutes to
               deliver!
            </p>
            <div className='testimonial-div'>
               <div>
                  <img
                     src={IMG('lazy-holding-burger.png')}
                     alt='Happy lady eating our tasty burger'
                  />
               </div>
               <div className='quote-div'>
                  <img className='comma-img' src={IMG('red-commas.svg')} alt='Red commas' />
                  <p>
                     Sed ut perspiciatis unde omnis iste natus error sit
                     voluptatem accusantium doloremque laudantium, totam rem
                     aperiam, eaque ipsa quae ab illo inventore veritatis et
                     quasi architecto beatae vitae dicta sunt explicabo.
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
               <img src={IMG('pizza-delivery-man-icon.svg')} alt='Pizza Delivery Guy' />
               <p>
                  Free shipping on <br /> first order
               </p>
               <p>Sign up for updates and get free shipping</p>
            </div>
            <div>
               <img src={IMG('timer.svg')} alt='Timer' />
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
               <img src={IMG('burger.svg')} alt='Burger' />
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
               <img src={IMG('meal.svg')} alt='Collection of food items' />
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
                  <img className='clock' src={IMG('clock.png')} alt='Clock icon' />
                  <p>
                     Mon-Thu: 11.00 – 23.00 <br />
                     Sat: 12.00 – 23.00 | sun: 12.00 – 21.00
                  </p>
               </div>
               <div>
                  <img
                     className='location'
                     src={IMG('location-marker.png')}
                     alt='Location marker icon'
                  />
                  <p>
                     123 East 456th Street, <br />
                     New York City NY 10065
                  </p>
               </div>
               <img className='socials' src={IMG('social-media-icons.svg')} alt='Social media icons' />
            </div>
            <div></div>
         </section>
         <section className='our-info-section'>
            <div>
               <div className='kanapka-branding'>
                  <img src={Logo} alt='logo' />
                  <h1>Kanapka</h1>
               </div>
               <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
               </p>
               <img
                  className='payments'
                  src={IMG('payment-icons.svg')}
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
