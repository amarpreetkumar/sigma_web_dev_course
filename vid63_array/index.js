console.log("hello world".length); // Output: 11 (length of the string) 
let a=[1,2,3,4,5];
console.log(a.length); // Output: 5 (length of the array)
console.log(a[0]); // Output: 1 (first element of the array)
console.log(a[4]); // Output: 5 (fifth element of the array)

console.log(a[5]); // Output: undefined (no element at index 5)
console.log(a[3]); // Output: 4 (fourth element of the array)
let b = [1, 2, 3, 4, 5,"ammu"];
console.log(b); // Output: [1, 2, 3, 4, 5, 'ammu'] (array with mixed types)
console.log(b[5]); // Output: ammu (sixth element of the array)
console.log(b.length); // Output: 6 (length of the array)
console.log(b[3]); // Output: 4 (fourth element of the array)
// Array methods
let arr = [1, 2, 3, 4, 5];
console.log(arr.length); // Output: 5 (length of the array)
arr.toString(); // Converts array to string
console.log(arr.toString()); // Output: "1,2,3,4,5" (string representation of the array)
console.log(arr.join("-")); // Output: "1-2-3-4-5" (join elements with "-")
console.log(arr.join(" ")); // Output: "1 2 3 4 5" (join elements with space)
console.log(arr.pop()); // Output: 5 (removes and returns the last element)
console.log(arr); // Output: [1, 2, 3, 4] (array after pop)
console.log(arr.shift()); // Output: 1 (removes and returns the first element)
console.log(arr); // Output: [2, 3, 4] (array after shift)

console.log(arr.push(6)); // Output: 4 (new length after adding 6)
console.log(arr); // Output: [2, 3, 4, 6] (array after push)
console.log(arr.unshift(1)); // Output: 5 (new length after adding 1 at the start)
console.log(arr); // Output: [1, 2, 3, 4, 6] (array after unshift)
console.log(delete arr[2]); // Output: true (deletes the element at index 2)
console.log(arr); // Output: [1, 2, <1 empty item>, 4, 6] (array after delete)
let a1= [1, 2, 3, 4, 5];
let a2= [6, 7, 8, 9, 10];
let a3= [11, 12, 13, 14, 15];
console.log(a1.concat(a2,a3)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] (concatenates arrays)
console.log(a1); // Output: [1, 2, 3, 4, 5] (original array remains unchanged)     
console.log(a1.sort()); // Output: [1, 2, 3, 4, 5] (sorts the array in ascending order)
console.log(a1.reverse()); // Output: [5, 4, 3, 2, 1] (reverses the array)
console.log(a1.slice(1, 3)); // Output: [4, 3] (slices the array from index 1 to 3)
console.log(a1.slice(2)); // Output: [3, 4, 5] (slices the array from index 2 to end)
console.log(a1.splice(1, 2)); // Output: [4, 3] (removes 2 elements starting from index 1)
console.log(a1); // Output: [1, 2, 5] (array after splice)

//looping in array
let arr1 = [1, 2, 3, 4, 5];
// Using for loop
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]); // Output: 1, 2, 3, 4, 5
}
// Using for...of loop
for (let element of arr1) {
    console.log(element); // Output: 1, 2, 3, 4, 5
}   
// Using forEach method
arr1.forEach(function(element) {
    console.log(element); // Output: 1, 2, 3, 4, 5
});
// Using forEach method with arrow function
arr1.forEach((element) => {
    console.log(element); // Output: 1, 2, 3, 4, 5
});
// Using for...in loop (not recommended for arrays)
for (let index in arr1) {
    console.log(arr1[index]); // Output: 1, 2, 3, 4, 5
}
// Using map method
let mappedArray = arr1.map((element) => {
    return element * 2; // Output: [2, 4, 6, 8, 10]
});
console.log(mappedArray); // Output: [2, 4, 6, 8, 10]
// Using filter method
let filteredArray = arr1.filter((element) => {
    return element > 2; // Output: [3, 4, 5]
});
console.log(filteredArray); // Output: [3, 4, 5]
// Using reduce method
let sum = arr1.reduce((accumulator, currentValue) => {
    return accumulator + currentValue; // Output: 15 (sum of all elements)
}, 0);
console.log(sum); // Output: 15
