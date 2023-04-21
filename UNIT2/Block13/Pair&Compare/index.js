// Using if/else statements and strict equality operators, JavaScript code in a script
//  tag that compares two sets of two values.
// Print true if at least one of the pairs is truthy.

let param1A ="cake";
let param1B ="cake";
let param2A ="pie";
let param2B ="pie";

if((param1A ===param1B) || (param2A === param2B))
{  
    console.log(param1A + " and " +param1B)
    console.log(param2A + " and " +param2B)
    console.log(true)   
}
else{
    console.log(param1A + " and " +param1B)
    console.log(param2A + " and " +param2B)
    console.log(false)
}