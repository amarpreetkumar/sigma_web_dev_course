//task is to create a function to get the factorial of any number

function factorial(n) {
    if(n<0) {
        return "Factorial is not defined for negative numbers";
    }
    if(n==0 || n==1) {
        return 1; // Base case: factorial of 0 or 1 is 1
    }
    return n * factorial(n - 1); // Recursive case: n! = n * (n-1)!
}
// Example usage:
console.log(factorial(5)); // Output: 120 (5! = 5 * 4 * 3 * 2 * 1)
console.log(factorial(0)); // Output: 1 (0! = 1)

console.log(factorial(-3)); // Output: "Factorial is not defined for negative numbers"
console.log(factorial(1)); // Output: 1 (1! = 1)

