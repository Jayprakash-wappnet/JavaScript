// for/of loop for array
let cars = ["volvo","verna","audi","kia"];
let demo = "";
for (let x of cars){
    demo += x+ "<br>";
}
document.getElementById("id2").innerHTML = demo;
 

// for/of for string
let language = "JavaScript";
let text = "";

for (let x of language) {
    text += x + "<br>";
}
document.getElementById("demo").innerHTML = text;
