// This is a simple JavaScript program that demonstrates the use of conditionals to check a person's age and print a message accordingly.
//conditionals
 
let age=5;

if(age>18){
    console.log("You are an adult.");
}
else if(age>12){
    console.log("You are a teenager.");
}       
else if(age>5){
    console.log("You are a child.");
}
else{
    console.log("You are a baby.");
}


let a=10;
let b=11;
let c=a>b ? (a*b):(a/b);
console.log(c); // 0.9090909090909091