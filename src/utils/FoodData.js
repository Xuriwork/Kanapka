const foodImage = (imgName) => {
   return require(`../assets/images/FoodItems/${imgName}`);
};

const sauceImage = (imgName) => {
   return require(`../assets/images/Toppings/${imgName}`);
};

export const foods = [
   {
      img: foodImage('pepperoni-pizza.jpg'),
      name: 'Pepperoni Pizza',
      section: 'Food',
      price: 6.00,
      tags: ['pizza'],
   },
   {
      img: foodImage('crispy-chicken-sandwich.jpg'),
      name: 'Crispy Chicken Sandwich',
      section: 'Food',
      price: 1.00,
      tags: ['chicken', 'sandwich'],
   },
   {
      img: foodImage('crispy-chicken-blt.jpg'),
      name: 'Crispy Chicken BLT',
      section: 'Food',
      price: 1.00,
      tags: ['chicken', 'sandwich'],
   },
   {
      img: foodImage('ultimate-cheeseburger.jpg'),
      name: 'Ultimate Cheeseburger',
      section: 'Food',
      price: 1.69,
      tags: ['burger', 'cheeseburger'],
   },
   {
      img: foodImage('double-cheeseburger.jpg'),
      name: 'Double Cheeseburger',
      section: 'Food',
      price: 2.39,
      tags: ['burger', 'cheeseburger'],
   },
   {
      img: foodImage('SpicyChickenSandwich.jpg'),
      name: 'Spicy Chicken Sandwich',
      section: 'Food',
      price: 1.00,
      tags: ['sandwich', 'chicken'],
   },
   {
      img: foodImage('Ultimate-Bacon-Cheeseburger.jpg'),
      name: 'Ultimate Bacon Cheeseburger',
      section: 'Food',
      price: 3.29,
      tags: ['burger', 'cheeseburger'],
   },
   {
      img: foodImage('chicken-nuggets.jpg'),
      name: 'Chicken Nuggets',
      section: 'Food',
      price: 1.19,
      tags: ['chicken', 'sides', 'includes-sauces'],
      pieces: 4,
   },
   {
      img: foodImage('chicken-fries.jpeg'),
      name: 'Chicken Fries',
      section: 'Food',
      price: 1.39,
      tags: ['fries', 'sides', 'chicken', 'includes-sauces'],
   },
   {
      img: foodImage('mozzarella-sticks.jpg'),
      name: 'Mozzarella Sticks',
      section: 'Food',
      price: 1.39,
      tags: ['sides', 'includes-sauces'],
      pieces: 4
   },
   {
      img: foodImage('chicken-tenders.jpg'),
      name: 'Chicken Tenders',
      section: 'Food',
      price: 1.39,
      tags: ['chicken', 'sides', 'includes-sauces'],
      pieces: 4
   },
   {
      img: foodImage('chili-cheese-fries.jpg'),
      name: 'Chili Cheese Fries',
      section: 'Food',
      price: 1.39,
      tags: ['fries', 'sides', 'includes-sauces'],
   },
   {
      img: foodImage('curlyfries.jpg'),
      name: 'Curly Fries',
      section: 'Food',
      price: 1.39,
      tags: ['fries', 'sides', 'includes-sauces'],
   },
   {
      img: foodImage('french-fries.jpg'),
      name: 'French Fries',
      section: 'Food',
      price: 1.39,
      tags: ['fries', 'sides', 'includes-sauces'],
   },
   {
      img: foodImage('waffle-fries.jpg'),
      name: 'Waffle Fries',
      section: 'Food',
      price: 1.39,
      tags: ['fries', 'sides', 'includes-sauces'],
   },
   {
      img: foodImage('vegan-sugar-cookie.jpg'),
      name: 'Vegan Sugar Cookies',
      section: 'Food',
      price: 1.00,
      tags: ['cookie', 'vegan', 'sweets', 'sides'],
   },
   {
      img: foodImage('applepie-mini.jpg'),
      name: 'Mini Applepie',
      section: 'Food',
      price: 1.49,
      tags: ['sweets', 'sides'],
   },
   {
      img: foodImage('CheesyGorditaCrunch.jpg'),
      name: 'Cheesy Gordita Taco',
      section: 'Food',
      price: 1.69,
      tags: ['taco'],
   },
   {
      img: foodImage('taco.jpg'),
      name: 'Taco',
      section: 'Food',
      price: 1.29,
      tags: ['taco'],
   },
   {
      img: foodImage('italian-sub.jpg'),
      name: 'Italian Sub',
      section: 'Food',
      price: 2.00,
      tags: ['sub'],
   },
   {
      img: foodImage('meatball-sub.jpg'),
      name: 'Meatball Sub',
      section: 'Food',
      price: 2.00,
      tags: ['sub'],
   },
   {
      img: foodImage('turkeysub.jpg'),
      name: 'Turkey Sub',
      section: 'Food',
      price: 2.00,
      tags: ['sub'],
   },
   {
      img: foodImage('milkshake-sundae-chocolate.png'),
      name: 'Chocolate Milkshake',
      section: 'Drink',
      price: 3.19,
      tags: ['drink', 'milkshake'],
   },
   {
      img: foodImage('strawberry-milkshake.png'),
      name: 'Strawberry Milkshake',
      section: 'Drink',
      price: 3.19,
      tags: ['drink', 'milkshake'],
   },
   {
      img: foodImage('vanilla-milkshake.png'),
      name: 'Vanilla Milkshake',
      section: 'Drink',
      price: 3.19,
      tags: ['drink', 'milkshake'],
   },
];

export const foodsList = foods.reduce((res, food) => {
   if (!res[food.section]) {
      res[food.section] = [];
   }
   res[food.section].push(food);
   return res;
}, {});

export const saucesList = [
   { 
      name: 'Barbeque Sauce',
      img: sauceImage('BarbequeSauce.svg'),
   },
   {
      name: 'Honey Mustard Sauce',
      img: sauceImage('HoneyMustardSauce.svg'),
   },
   {
      name: 'Sweet & Sour Sauce',
      img: sauceImage('Sweet&SourSauce.svg'),
   },
   {
      name: 'Ranch Dip',
      img: sauceImage('RanchDip.svg'),
   },
   {
      name: 'Buffalo Sauce',
      img: sauceImage('BuffaloSauce.svg'),
   },
   {
      name: 'Ketchup',
      img: sauceImage('Ketchup.svg'),
   },
   {
      name: 'Mayonnaise',
      img: sauceImage('Mayonnaise.svg'),
   },
   {
      name: 'Marinara Sauce',
      img: sauceImage('MarinaraSauce.svg'),
   },
];

export default foods;
