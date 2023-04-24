//Write an algorithm that accepts a string of lowercase letters.
// Print the word followed by how many consonants and vowels it has.
//create an array that accepts string input
//create an array that holds vowels
//input the string
//use the for loop to scan through the String array
//use the for loop to scan though the vowels array
// if a match is found print the string and vowel and consonant count.
//initialize  2 counts to track the number of times a letter is found

const inputString =["h","e","l","l","o","s"]
const vowels =["a", "e", "i", "o","u"]
let vowelcount = 0;
let consonantcount = 0;
let i;
let j;
     
for ( i= 0; i < vowels.length; i++){
       
            if(inputString.length===vowels[i]){
                             vowelcount++
                             console.log(inputString[i])
            }
        }
         
            
         
                // console.log(inputString[i])      
             
                // consonantcount++ 
               
        
           
    
              
        
        // console.log(inputString[i]) 
    console.log("hello has " + consonantcount +" consonants and "+ vowelcount +" vowels")
      
    // console.log()
 

