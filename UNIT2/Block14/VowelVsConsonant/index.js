//Write an algorithm that accepts a string of lowercase letters.
// Print the word followed by how many consonants and vowels it has.
//create an array that accepts string input
//create an array that holds vowels
//input the string
//use the for loop to scan through the String array
//use the for loop to scan though the vowels array
// if a match is found print the string and vowel and consonant count.
//initialize  2 counts to track the number of times a letter is found

// const inputString =["h" ,"e","l","l","o","s"]
// const inputString = ["u","k","u","l","e","l","e"]
// const inputString = ["a","w","e","s","o","m","e"]
// const inputString =["o","n","o","m","o","n","o","p","i","a"]
const inputString = ["t","e","x","t","b","o","o","k"]
const vowels =["a", "e", "i", "o","u"]
let vowelcount = 0;
let consonantcount = inputString.length;
let i;
let j;
     
for ( i= 0; i < vowels.length; i++){
    for ( j= 0; j < inputString.length; j++)
            if(inputString[j]===vowels[i]){
                             vowelcount++
                             consonantcount--
                             console.log(vowels[i])

            }
        }
         
            
                
        
        // console.log(inputString[i]) 
    console.log(inputString + " has " + consonantcount +" consonants and "+ vowelcount +" vowels")
      
    // console.log()
 

