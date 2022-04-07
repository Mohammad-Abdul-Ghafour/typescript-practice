// -------------------------------
//    Variables and Data Types
// -------------------------------

const inputs = document.querySelectorAll('input');

console.log(inputs)

inputs.forEach(input => {
    console.log(input);
});

let character = 'mario';
let age = 30;
let isBlackBelt = false;

// character = 20;
character = 'luigi';

// age = 'yoshi';
age = 40;

// isBlackBelt = 'yes';
isBlackBelt = true;

const circ = (diameter: number) => {
  return diameter * Math.PI;
};

// console.log(area('hello'));
console.log(circ(7.5));

// -------------------------------
//            Arrays
// -------------------------------

let names = ["Mohammad","Ahmad"];

names.push("Hadi");
// names.push(33);
// names[0] = 3;

let numbers = [10,5,18];

numbers.push(15);
// numbers.push("Ahmad");
// numbers[0] = "Mohammad";

let mixed = ["Mohammad",10]

mixed.push("Hadi");
mixed.push(15);

let array = []

array.push("Hadi");
array.push(5);
array.push(false);

console.log(names);
console.log(numbers);
console.log(mixed);
console.log(array);

// -------------------------------
//           Objects
// -------------------------------

let person = {
  name : "Mohammad",
  age : 29,
};

person.name = "Ahmad";
person.age = 30;
// person.name = 10;
// person.age = '30';
// person.skills = [];

person = {
  name : "Ahmad",
  age : 40,
  // skills : []
};
