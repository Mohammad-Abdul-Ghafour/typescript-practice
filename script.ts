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

// -------------------------------
//         Explicit Types
// -------------------------------

// Variables

let sureName : string;
let height : number;

// sureName = 30;
sureName = "Abdul Ghafour"
height = 185;

// Arrays

let firstArray : string[];

// firstArray.push("Mohammad");
// firstArray = [30];
firstArray = ["Mohammad"];
firstArray.push("Ahmad");

let secondArray : number[] = [];

secondArray.push(30);
// secondArray = ["Mohammad"]

// Objects

let firsObject : object;

firsObject = {name:"Mohammad",age:29};
firsObject = [];

let secondObject : {
  name:string,
  age:number
};

secondObject = {name:"Mohammad",age:29};
// secondObject = []

// Union Types

let unionVariable : string | number;

unionVariable = "Mohammad";
unionVariable = 29;

let unionArray : (string|number)[];

unionArray = ["Mohammad",29];

let firstUnionObject : object|string;

firstUnionObject = "Mohammad";
firstUnionObject = {};

let secondUnionObject : {
  name:string|number,
  age:number|boolean
};

secondUnionObject = {name:"Mohammad",age:29}
secondUnionObject = {name:29,age:false}
// secondUnionObject = "Mohammad"

// Any Type

let anyVariable : any;

anyVariable = "Mohammad";
console.log(anyVariable);
anyVariable = 29;
console.log(anyVariable);
anyVariable = true;
console.log(anyVariable);

let anyArray : any[] = [];

anyArray.push(29);
anyArray.push(true);
anyArray.push("Mohammad");
console.log(anyArray);

let anyObject : {name:any,age:any};

anyObject = {name:"Mohammad",age:29};
console.log(anyObject);
anyObject = {name:29,age:"Mohammad"};
console.log(anyObject);
