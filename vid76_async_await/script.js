//THIS IS EXAMPLE OF ASYNC W3HICH ALLOWS LATER LINE OF CODE WHILE PROMISE IS IN PENDING MODE.
//  function getdata(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Data fetched successfully');
//         }, 2000);
//     });
//  }
// console.log('This is Async Await');
// let data=getdata()
// console.log(data)
// console.log('This is the end of the script');



//IF WE WANT THAT NOTHING WILL PRINT TILL OUR PROMISE WILL GET RESOLVED,THERE ARE 2 WAYS 
//1. USE THEN METHOD
//2. USE ASYNC AWAIT

//THIS IS EXAPLE OF FIRST METHOD
//  function getdata(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Data fetched successfully');
//         }, 12000);
//     });
//  }
// console.log('This is Async Await');

// let data=getdata()

// data.then((v)=>{
// console.log(data)
// console.log('This is the end of the script');
// })



//exaple of 2nd method

//  async function getdata(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Data fetched successfully');
//         }, 12000);
//  });
//  }
// console.log('This is Async Await');
// let data=getdata()
// console.log(data)
// console.log('This is the end of the script');

//we will get immediate output of data as pending because we are not waiting for the promise to resolve
//to wait for the promise to resolve we will use async await inside an async function 



//if we want to wait for aysnc function to get executed we will use await keyword

// async function getdata(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Data fetched successfully');
//         }, 12000);
//  });
//  }

//  async function main() {
// console.log('This is Async Await');
// let data= await getdata()
// console.log(data)
// console.log('This is the end of the script');
//  }
//  main();

 //here in this case  this is asyncwait printed instant in console and then after 12 seconds data fetched successfully is printed
 //this is the end of the script is printed at last

//this is how we can use async await to wait for a promise to resolve before executing the next line of code
//this is a very powerful feature of javascript which allows us to write asynchronous code in a synchronous manner




//fetch api explain 
//fetch api is used to make network requests in javascript
//it is a modern way to make network requests and is supported in all modern browsers   
//exp[lain all conceptf of fetch api thorugh code '

