//here i want to import fs/promise module



import fs from "fs/promises";
 let a= await fs.readFile("output.txt")
// console.log(a.toString())

//op:Hello, World!this is methis is methis is methis is me

// await fs.writeFile("output1.txt","hey i am promise")


let b = await fs.appendFile("output1.txt", "\n\n\n\nthis is amazing promise")
console.log(a.toString(), b)
