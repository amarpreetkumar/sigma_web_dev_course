// Get user input as a string
let input = prompt("Enter number1:");
let number1 = Number(input);

let input2 = prompt("Enter number2:");
let number2 = Number(input2);

let isFaulty = Math.random() < 0.1; // 10% chance

// Define functions based on faulty or correct behavior
let sum, sub, mul, div;

if (isFaulty) {
    // Faulty operations
    sum = function(a, b) {
        console.log(a - b);
    };
    sub = function(a, b) {
        console.log(a / b);
    };
    mul = function(a, b) {
        console.log(a + b);
    };
    div = function(a, b) {
        console.log(a ** b);
    };
} else {
    // Correct operations
    sum = function(a, b) {
        console.log(a + b);
    };
    sub = function(a, b) {
        console.log(a - b);
    };
    mul = function(a, b) {
        console.log(a * b);
    };
    div = function(a, b) {
        console.log(a / b);
    };
}

// Call the functions
sum(number1, number2);
sub(number1, number2);
mul(number1, number2);
div(number1, number2);
