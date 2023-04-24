// create a for-loop to print numbers 1-100
// if number is a multiple of 3, print "Fizz
// if number is a multiple of 5, print "Buzz"
// if number is both multiple of 5, print "FizzBuzz"

for(i = 1; i <= 100; i++){
  
     if(i%3===0){
    console.log(i, "Fizz")
  }
    if(i%5===0){
    console.log(i, "Buzz")
  }
    if((i%3===0) && (i%5===0)){
    console.log(i, "FizzBuzz")
  }
    
  
}