//Write an algorithm that accepts an array of numbers and returns a new 
//array with only the odd numbers from the original array
//there is only one odd number in the array
//make a for loop to read entire array
//using modulus, check if number is odd
//console.log the result 

// Test values
// const oddArray = [2, 4, 6, 8, 11, 20, 15, 22]
// const oddArray =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const oddArray =[70, 42, 55, 81, 21, 91, 34]
// const oddArray = [2, 4, 6, 8, 10, 11, 12] 
let newArr=[];
for (let i = 0; i< oddArray.length; i++){
    
        if(oddArray[i]%2 ===1){

        newArr[(oddArray[i])]
        
     }
    return newArr;
}