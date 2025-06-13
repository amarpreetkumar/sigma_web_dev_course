const fs=require('fs');
console.log("starting");
//asynchronous file write
// This will write 'Hello, World!' to output.txt

// fs.writeFile('output.txt', 'Hello, World!', (err) => {
//   if (err) {
//     console.error('Error writing file:', err);
//   } else {
//     console.log('File written successfully');
//   }
// });
// console.log("ending");


//readfile explanation
// fs.readFile("output.txt",(error,data) =>
// {
//     console.log(error,data.toString())
// })

fs.appendFile('output.txt', 'this is me', (err) => {
    if (err) {
        console.error('Error appending to file:', err);
    } else {
        console.log('Text appended successfully');
    }
});


//this can create callback hell so we will use fs/promise module
