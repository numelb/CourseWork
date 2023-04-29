//If a customer has a subscription, the customer will receive a 25% discount after the refill total has been calculated.
// If the customer has a coupon, the customer will receive a $10 discount after the subscription discount has been calculated.
// At the end of the script, you should return and log the string "Your grand total is ${finalAmount}."
//create three customer objects
//create 2 functions to calculate the discounts.
//creat a function to calculate the grand total.

const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}
//Declare discount constants
const couponDiscount = 10;
const subcriptionDiscount =.25;
//Calculate total if customer has subcription
function hasSubcription(Object){
   
    let sum =  (Object.pricePerRefill * Object.refills)
    let discount =  (sum  * subcriptionDiscount);
    sum = (sum - discount)
    // console.log(sum)
    return sum;
       
}

//Calculate total if customer has coupon
function hasCoupon(Object){
        let sum =  (Object.pricePerRefill * Object.refills)
        sum = sum - couponDiscount
        // console.log(sum)
        return sum;
     }
//Calculate total if customer has both subcription and coupon
function hasSubAndCoupon(Object){
        let  sum = hasSubcription(Object)
        sum = sum -couponDiscount
        // console.log(sum)
        return sum

     }
//Calculate Grand total 
function Total(Object){
    let sum =0;
    if((Object["subscription"]=== true) && (Object["coupon"]=== true)){
        sum = hasSubAndCoupon(Object)
        // console.log(Object)
        return sum
           }
    else if (Object["subscription"]=== true) {
        sum = hasSubcription(Object)
        return sum
    }
    else{

       sum = hasCoupon(Object)
       return sum
    }

}

console.log("Timmy your grand total is $"+  Total(timmy))
console.log("Sarah your grand total is $" + Total(sarah))
console.log("Rocky Your grand total is $" + Total(rocky))
// console.log(Object.values(rocky))
// hasSubcription(rocky)
