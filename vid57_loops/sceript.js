console.log("i am a loop");
for (let i = 0; i < 5; i++) {
  console.log("i am loop element number " + i);
}
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }

let amar = {
  name: "amar",
  age: 20,
  sex: "male",
  role: "sde",
  skill: "javascript",
  isMarried: false,
};
//basic loop strcuture of for in
// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];

//     }
// }
for (const key in amar) {
  {
    console.log(key);
  }
}
//foor array iteration
for(const c of "amar"){
    console.log(c);
}
let i=1;
while (i>0) {
  // code block to be executed
  console.log("i am a while loop");
  break; // to avoid infinite loop
    
}

do {
    // code block to be executed
    console.log("i am a do while loop");
    i++;
    if (i > 5) {
        break; // to avoid infinite loop
    }
    
} while (i < 10);
