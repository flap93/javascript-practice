
// DESTRUCTURING ARRAYS

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function(startIndex, mainIndex) {
    return [this.starterMenu[startIndex], this.mainMenu[mainIndex]]
  }
}

// console.log(restaurant)


// let [one , two] = restaurant.categories



// console.log(one, two)

// you can skip one element simply by adding a space with spaces

// const [one , ,two] = restaurant.categories

// the ouput is : Italian , vegetarian 


// console.log(`The type of restaurant is ${one}`)

//-----------------------------------------------------------------
// destructuring through a function ---------------------------
//------------------------------------------------
console.log(restaurant.order(2, 0)); // testing the data that we are receiving 
//  we process to destructure 

const [starter, mainCourse] = restaurant.order(2, 0);

console.log(starter, mainCourse)

//---------------------------------------------
// Nester Array---------------------------
//-----------------------------------------------------

const nested = [1, 2, 3, [4, 5, 6]]


const [a, , , [b, c, d]] = nested

console.log(a, b, c, d);

//-----------------------------------------
// Default values ---------------------
//------------------------------------------------------

const [p = 1, q = 1, r = 1] = [8, 9]
console.log(p, q, r) // basically what this doues get in us temples for our data that we want , so in this case 
//  we are printig 3 values but since the thrid value of our array its not include the out will be this
// output :  8 , 9 , 1
// but if add a third number in the array we will get the numbers 
// example:  = [8, 9, 10]  output :  8, 9, 10
