
// 1. Clean the data
const coffee_data =require("./coffee_data.js")
// 2. Print an array of all the drinks on the menu.

const drinks = coffee_data.map((drinkObject)=>drinkObject.name);


// 3. Print an array of drinks that cost 5 and under.
const drinksUnder5 = coffee_data.filter((drinkObject)=>drinkObject.price <= 5)  

// 4. Print an array of drinks that are priced at an even number.
const evenPriced = coffee_data.filter((drinkObject) => drinkObject.price % 2===0 );


// 5. Print the total if you were to order one of every drink.
const totalCost = coffee_data.reduce((total, drinkObject) => (total += drinkObject.price), 0

);
// 6. Print an array with all the drinks that are seasonal.
const seasanlDrinks = coffee_Data.filter((drinkObject) => drinkObject.seasonal  === true );

// 7. Print all the seasonal drinks with the words "with imported beans" after the item name. im