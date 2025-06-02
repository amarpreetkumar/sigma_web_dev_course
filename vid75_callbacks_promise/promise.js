console.log('This is Promises');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done")
            resolve("Harry")
        }, 8000);
    }
})

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you 2")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done 2")
            resolve("Harry 2")
        }, 5000);
    }
})
let prom3= new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you 2")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done 3")
            resolve("Harry 3")
        }, 1000);
    }
})
 
// Promise.all will wait for all promises to resolve
//pro,ise.race will resolve as soon as one promise resolves
//promises api is used to handle multiple promises
//explain all premises
let p3 = Promise.race([prom1, prom2,prom3])
p3.then((a)=>{
    console.log(a)
}).catch(err=>{
    console.log(err)
})