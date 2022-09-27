const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
//--------------------------------------------------------
// TO GET THE VALUE OF THE PROPERTIES OF THE OBJECT----------------
//-------------------------------------------------------------------

// const { name, openingHours, categories} = restaurant;

// console.log(name, openingHours, categories)


//-------------------------------------------------------------
// TO CHANGE THE NAME THE OF THE PROPERTIES OF THE OBJECT -----------------
//----------------------------------------------------------------


// const { name: restaurantName, openingHours: hours, categories: tags} = restaurant;

// now if we print the data the outcome will be the same just with diferent names


//---------------------------------
//---------DEFAULT VALUES -------------------------------
//----------------------------------


const { menu = [], starterMenu: starters = [] } = restaurant;

console.log(menu, starters);


// ------------------------------------
//----------NESTED OBJECTS----------------
//--------------------------------------------------

const { 
  fri: {open, close},
} = restaurant.openingHours;

console.log(open, close);