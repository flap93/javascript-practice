

// const product = {
//   name: "Gummy Bears",
//   inStock: true,
//   price: 1.99,
//   flavors: ["grape", "apple", "cherry"]
// }

// console.log(product)

// console.log(product.inStock);

// const restaurant = {
//   name: 'Ichiran Ramen',
//   address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
//   city: 'Brooklyn',
//   state: 'NY',
//   zipcode: '11206',
// }

// // bracket notation
// let fullAddress = restaurant["address"] + ", " + restaurant["city"] + ", " +
//   restaurant["state"] + " " + restaurant["zipcode"];

// console.log(fullAddress)
// // Dot notation

// // const fullAddress = `${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}`

// // modifying objects 

// const midterms = { danielle: 96, thomas: 78 }

// // updating
// midterms.thomas = 85
// // changing
// midterms["Antonio"] = 95

// console.log(midterms);


// // arrays inside of objects

// const comments = [
//   {username: 'tammy', text: "shdhsdfhs", vote: 9},
//   {username: 'jessica', text: "hola", vote: 7},

// ]

// console.log(comments[1].text)
// console.log()

// --------------------------------------------------------


const dolphins = (a, b, c) => {
  return a + b + c / 3;
}

dolphins(44, 23, 71)

const koala = (a, b, c) => {
  return a + b + c / 3;
}


koala(65, 54, 49)


const checkWinner = (dolphins , koalas) => {
  if (dolphins >= 2 * koalas) {
    console.log(`Dolphins win (${dolphins} vs ${koalas})`);
  }
  else if ( koalas >= 2 * dolphins) {
    console.log(`Koalas win (${koalas} vs ${dolphins})`);
  }
  else {
    console.log("No teams win ")
  }
}


checkWinner(dolphins, koala);