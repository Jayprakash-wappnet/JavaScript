//const use for assign array

const animal = ["Horse", "camel", "lion", "tiger"];
animal[2] = "Monkey";  //change an element which located at index=2
console.log(animal[2]);
console.log(animal);
animal.push("elephant");
console.log(animal);

//value assigned when they declared

const day = 7;
console.log(day);

const PI;
PI = 3.14;     //its give an error

// object using const
const details = {fname : "Jp",lname : "darji" };
console.log(details);
details.fname = "aryan";   //change the propery og object
console.log(details);  // this print aryan as fname