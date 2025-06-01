console.log("this is busness name generator");
//adjectives
//solving wihtout array
let adj1 = "Amazing";
let adj2 = "crazy";
let adj3 = "fire";

//shopname
let shop1 = "engine";
let shop2 = "foods";
let shop3 = "garments";

//another words
let another1 = "bros";
let another2 = "limited";
let another3 = "hub";

function generateBusinessName() {
  console.log("Welcome to the Business Name Generator!");

  /*
    Step-by-step explanation:

Math.random()
Generates a random decimal number between 0 (inclusive) and 1 (exclusive), e.g., 0.534.

Math.random() * 3
Multiplies that number by 3, giving a value between 0 and 2.999....

Math.floor(...)
Rounds down to the nearest whole number, so possible results are 0, 1, or 2.

+ 1
Adds 1, so the final possible values are 1, 2, or 3.
    */

  let randomAdj = Math.floor(Math.random() * 3) + 1; // Random number between 1 and 3
  let randomShop = Math.floor(Math.random() * 3) + 1; // Random number between 1 and 3
  let randomAnother = Math.floor(Math.random() * 3) + 1; // Random number between 1 and 3
  let businessName = "";
  // Constructing the business name based on random selections
  if (randomAdj === 1) {
    businessName += adj1;
  } else if (randomAdj === 2) {
    businessName += adj2;
  } else {
    businessName += adj3;
  }
  // Adding shop name
  if (randomShop === 1) {
    businessName += " " + shop1;
  } else if (randomShop === 2) {
    businessName += " " + shop2;
  } else {
    businessName += " " + shop3;
  }
  // Adding another word
  if (randomAnother === 1) {
    businessName += " " + another1;
  } else if (randomAnother === 2) {
    businessName += " " + another2;
  } else {
    businessName += " " + another3;
  }
  // Output the generated business name
  console.log("Your business name is: " + businessName);
  return businessName;
}
generateBusinessName(); // Call the function to generate a business name
// Note: The function generates a random business name each time it is called.
