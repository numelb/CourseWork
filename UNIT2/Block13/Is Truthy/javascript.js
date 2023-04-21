// Using if/else statements, create a JavaScript code in a script tag that follows the following rules:


// if the value is truthy, print true;
// If the value is falsy, print the corresponding result:
// "The boolean value false is falsy";
// "The null value is falsy";
// "undefined is falsy";
// "The number 0 is falsy (the only falsy number)";
// "The empty string is falsy (the only falsy string)";
var value="";
if(value){
    console.log(value)
    console.log("The empty string is falsy (the only falsy string)");
}
else{
    if(value ===false){

        console.log(value)
        console.log("The boolean value false is falsy");
    }

    else if(value ===null){
        console.log(value)
        console.log("The null value is falsy");
    }
    else if(value ===undefined){
        console.log(value)
        console.log("undefined is falsy");
    }
    else if(value ==="I am a string"){
        console.log(value)
        console.log(true);
    }
    else if(value ===0){
        console.log(value)
        console.log("The number 0 is falsy (the only falsy number)");
    }
}

