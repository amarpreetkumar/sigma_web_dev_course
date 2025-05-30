console.log("hey i am javascript");
var a=6;
var b="amar"
var c=true;
var d =null;
var e=undefined;
console.log(typeof a); // number
console.log(typeof b); // string                            
console.log(typeof c); // boolean

console.log(typeof d); // object
console.log(typeof e); // undefined
console.log(a+b); // 6amar
console.log(a+c); // 7
console.log(a+d); // 6
console.log(a+e); // 6

console.log(b+c); // amartrue


/*var vs let  vs const*/
var x = 10;
let y = 20;
const z = 30;
console.log(x); // 10

console.log(y); // 20
console.log(z); // 30
x = 15; // reassigning var
y = 25; // reassigning let
// z = 35; // TypeError: Assignment to constant variable.
console.log(x); // 15
console.log(y); // 25
console.log(z); // 30
// var can be redeclared
var x = 100; // redeclaring var
console.log(x); // 100
// let cannot be redeclared
// let y = 200; // SyntaxError: Identifier 'y' has already been declared
// const cannot be redeclared
// const z = 300; // SyntaxError: Identifier 'z' has already been declared
// let and const are block scoped
{
    let a = 50;
    const b = 60;
    console.log(a); // 50
    console.log(b); // 60
}
// console.log(a); // ReferenceError: a is not defined
// console.log(b); // ReferenceError: b is not defined

// var is function scoped
function testVar() {
    var a = 70;
    console.log(a); // 70
}
testVar();
// console.log(a); // ReferenceError: a is not defined
// let and const are not hoisted
console.log(x); // 100
console.log(y); // 25
console.log(z); // 30


//objects
let person = {
    name: "John",
    age: 30,
    isStudent: false
};
console.log(person); // { name: 'John', age: 30, isStudent: false }
console.log(person.name); // John
console.log(person.age); // 30
console.log(person.isStudent); // false
console.log(typeof person); // object

/*adding in object*/
person.city = "New York"; // adding a new property
console.log(person); // { name: 'John', age: 30, isStudent: false, city: 'New York' }
person.age = 31; // updating an existing property   
console.log(person); // { name: 'John', age: 31, isStudent: false, city: 'New York' }
