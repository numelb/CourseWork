//Write an algorithm that accepts an array of numbers and returns a new 
//array with only the odd numbers from the original array
//there is only one odd number in the array
//make a for loop to read entire array
//using modulus, check if number is odd
//console.log the result 

const oddArray = [2, 4, 6, 8, 10, 11, 12] 
for (let i = 0; i< oddArray.length; i++){
    
        if(oddArray[i]%2 ===1){

        console.log(oddArray[i])
     }
    
}