function amar(params) {
    console.log("i am a function");
    return "i am a function return value";          
}   

// function declaration

amar(); // calling the function
let a = amar(); // calling the function and storing the return value in a variable
console.log(a); // "i am a function return value"

/* output:
i am a function
i am a function
i am a function return value
*/



// function expression
// optional parameters
function sum(a,b,c=3) {
    return a + b + c;
}
 console.log(sum(3,5)); // 11
 console.log(sum(3,5,6)); // 14



 console.log(4+null); // 4
console.log(4+undefined); // NaN

//arrow functions
//used to write the concisde3 code for functions    
const arrowFunction = (a, b) => {
    return a + b;
};

console.log(arrowFunction(3, 5)); // 8
