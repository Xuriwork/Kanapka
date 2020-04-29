

const IMG = (imgName) => {
   return require(`../../assets/images/FoodItems/${imgName}`);
};

export const foods = [
   {
      img: IMG('crispy-chicken-sandwich.jpg'),
      name: 'Crispy Chicken Sandwich',
      section: 'Food',
      tags: ['chicken'],
   },
   {
      img: IMG('double-cheeseburger.jpg'),
      name: 'Double Cheeseburger',
      section: 'Food',
      tags: ['burger'],
   },
   {
      img: IMG('SpicyChickenSandwich.jpg'),
      name: 'Spicy Chicken Sandwich',
      section: 'Food',
      tags: ['sandwich', 'chicken'],
   },
   {
      img: IMG('Ultimate-Bacon-Cheeseburger.jpg'),
      name: 'Ultimate Bacon Cheeseburger',
      section: 'Food',
      tags: ['burger', 'cheeseburger'],
   },
   {
      img: IMG('chicken-nuggets.jpg'),
      name: 'Chicken Nuggets',
      section: 'Food',
      tags: ['chicken', 'sides'],
      pieces: 'yes'
   },
   {
      img: IMG('chicken-fries.jpeg'),
      name: 'Chicken Fries',
      section: 'Food',
      tags: ['fries', 'sides', 'chicken'],
   },
   {
      img: IMG('mozzarella-sticks.jpg'),
      name: 'Mozzarella Sticks',
      section: 'Food',
      tags: ['sides'],
      pieces: 'yes'
   },
   {
      img: IMG('chicken-tenders.jpg'),
      name: 'Chicken Tenders',
      section: 'Food',
      tags: ['chicken', 'sides'],
      pieces: 'yes'
   },
   {
      img: IMG('chili-cheese-fries.jpg'),
      name: 'Chili Cheese Fries',
      section: 'Food',
      tags: ['fries', 'sides'],
   },
   {
      img: IMG('curlyfries.jpg'),
      name: 'Curly Fries',
      section: 'Food',
      tags: ['fries', 'sides'],
   },
   {
      img: IMG('french-fries.jpg'),
      name: 'French Fries',
      section: 'Food',
      tags: ['fries', 'sides'],
   },
   {
      img: IMG('waffle-fries.jpg'),
      name: 'Waffle Fries',
      section: 'Food',
      tags: ['fries', 'sides'],
   },
   {
      img: IMG('vegan-sugar-cookie.jpg'),
      name: 'Vegan Sugar Cookies',
      section: 'Food',
      tags: ['cookie', 'vegan', 'sweets', 'sides'],
   },
   {
      img: IMG('applepie-mini.jpg'),
      name: 'Mini Applepie',
      section: 'Food',
      tags: ['sweets', 'sides'],
   },
   {
      img: IMG('CheesyGorditaCrunch.jpg'),
      name: 'Cheesy Gordita Taco',
      section: 'Food',
      tags: ['taco'],
   },
   {
      img: IMG('taco.jpg'),
      name: 'Taco',
      section: 'Food',
      tags: ['taco'],
   },
   {
      img: IMG('milkshake-sundae-chocolate.png'),
      name: 'Chocolate Milkshake',
      section: 'Drink',
      tags: ['drink'],
   },
   {
      img: IMG('strawberry-milkshake.png'),
      name: 'Strawberry Milkshake',
      section: 'Drink',
      tags: ['drink'],
   },
   {
      img: IMG('vanilla-milkshake.png'),
      name: 'Vanilla Milkshake',
      section: 'Drink',
      tags: ['drink', 'milkshake'],
   },
];

// export const Menu = () => {
//    return <div>
//       {foods.map((food) => (
//         <img key={food.name} src={food.img} alt='ds' />
//       ))}
//    </div>
// };

export const foodsList = foods.reduce((res, food) => {
   if (!res[food.section]) {
      res[food.section] = [];
   }
   res[food.section].push(food);
   return res;
}, {});

export default foods;
