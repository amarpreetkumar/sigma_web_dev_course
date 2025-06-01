let a="amar";
console.log(a[0]);
console.log(a); // Output: amar
console.log(a[4]); // Output: undefined (no character at index 4)
console.log(a.length); // Output: 4 (length of the string)
console.log(a[3]); // Output: r (character at index 3)

//string literals
let b = "hello";
let c = 'hello';

console.log("hey i am SAying &{b} and ${c}"); // Output: hey i am SAying hello and hello
console.log(`hey i am SAying ${b} and ${c}`); // Output: hey i am SAying hello and hello
// Template literals
let d = `hello ${b} and ${c}`;
console.log(d); // Output: hello hello and hello
let intro=`my name is "amar" and i am a "web developer."`;
console.log(intro); // Output: my name is "amar" and i am a "web developer"

// String methods   
let str = "hello world";    
console.log(str.length); // Output: 11 (length of the string)
console.log(str.toUpperCase()); // Output: HELLO WORLD (convert to uppercase)
console.log(str.toLowerCase()); // Output: hello world (convert to lowercase)
console.log(str.indexOf("world")); // Output: 6 (index of substring "world")
console.log(str.lastIndexOf("l")); // Output: 9 (last index of character "l")
console.log(str.includes("world")); // Output: true (check if substring "world" exists)
console.log(str.startsWith("hello")); // Output: true (check if string starts with "hello")
console.log(str.endsWith("world")); // Output: true (check if string ends with "world")

console.log(str.slice(0, 5)); // Output: hello (slice from index 0 to 5)
console.log(str.slice(6)); // Output: world (slice from index 6 to end)
console.log(str.substring(0, 5)); // Output: hello (substring from index 0 to 5)    
console.log(str.substr(0, 5)); // Output: hello (substring from index 0 with length 5)
console.log(str.split(" ")); // Output: ['hello', 'world'] (split by space)
console.log(str.split("o")); // Output: ['hell', ' w', 'rld'] (split by character "o")
console.log(str.replace("world", "everyone")); // Output: hello everyone (replace "world" with "everyone")
console.log(str.replace(/l/g, "x")); // Output: hexxo worxd (replace all occurrences of "l" with "x")
console.log(str.trim()); // Output: hello world (remove whitespace from both ends)
console.log(str.trimStart()); // Output: hello world (remove whitespace from start)
console.log(str.trimEnd()); // Output: hello world (remove whitespace from end)
console.log(str.charAt(0)); // Output: h (character at index 0)
console.log(str.charCodeAt(0)); // Output: 104 (ASCII code of character at index 0)
console.log(str.concat("!")); // Output: hello world! (concatenate with "!")
console.log(str.repeat(2)); // Output: hello worldhello world (repeat string 2 times)
console.log(str.padStart(15, "*")); // Output: ***hello world (pad start with "*")
console.log(str.padEnd(15, "*")); // Output: hello world*** (pad end with "*")
console.log(str.match(/l/g)); // Output: ['l', 'l', 'l'] (match all occurrences of "l")
``