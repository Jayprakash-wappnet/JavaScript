//spread operator(...)
let animal1 = ["horse", "camel", "Lion"];
let animal2 = [...animal1, "monkey", "donkey"]; // it add monkey and donkey into animal1 array1 

console.log(animal2); //return the animal1 array with adding the value monkey and donkey


const numbers = [12, 64, 98, 45, 32, 78];
let Highervalue = Math.max(...numbers);
console.log(Highervalue);