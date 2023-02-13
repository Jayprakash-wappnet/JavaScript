//can not redeclared

let x = 512;

let x = 600;            //it show SyntaxError: Identifier 'x' has already been declared

//block scope

let y = 56;
//here y = 5

{
    let y = 96;
    //here y = 96 
}

//here y = 56
//variable inside a {} can't accessed from herr

console.log(y);

//hoisting

let schoolName;
schoolName = "Sarvodaya High School";
//this is complete

console.log(schoolName);

rollNumber = 131013;
let rollNumber;
//its gives a Reference error: Cannot access 'rollNumber' before initialization at object


