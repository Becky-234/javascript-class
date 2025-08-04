let x = 5;
(x == 8);
(x != 8);
console.log(x == 8);
console.log(x != 8);

//conditions
//if
const isLoggedIn = true;

if (isLoggedIn) {
  console.log("Welcome back!");
}

//if else
    const isHungry = false;

if (isHungry) {
  console.log("Let's eat!");
} else {
  console.log("Not hungry right now.");
}

//loops
//for loop
let text = " "
for (let i = 0; i < 5; i++) {
  text += "Number" + i + "\n"; //"\n" means a new line
}
console.log(text);

//for in loop
//for in over Arrays (for in is meant for objects not arrays)
const fruits = ["apple", "banana", "mango"];
//index will be 0, 1, 2- the index keys of an array
for (let index in fruits) {
  console.log(index, fruits[index]);
}

//array.forEach()


//looping over an Array
const cars = ["BMW", "Volvo", "Mini"];

let textTwo = " ";
for (let x of cars) {
  textTwo += x + "\n";
}
console.log(textTwo);