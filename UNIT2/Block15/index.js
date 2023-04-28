//create an object labeled customer and add the following key:value
let customer = {
    firstName:	"jake",
    lastName:	"smith",
    email:	"jaekSmih!aol.com",
    phone:	undefined,
    zipCode:	"631",
    favoriteFlavors:	32,
    cupSize:	"medium",
    favoriteStore:	"Target",
    firstVisit:	false
};
console.table(customer)
customer["email"] =  "Jak3Smith1992@email.com";
customer["phone"] = 3195551234;
customer ["zipCode"] = 63132;
customer["favoriteFlavors"] = ["coffee", "strawberry",  "matcha"]


delete customer["zipCode"]
delete customer["favoriteStore"]

customer.toppings =["chocolate sprinkles", "water straws", "gummy bears"];
customer.futureFlavours= "mango"
customer.todaysPurchaseCost =  5.32

console.log(customer)
console.log(Object.keys(customer))

