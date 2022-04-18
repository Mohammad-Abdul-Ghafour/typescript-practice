"use strict";
// -------------------------------
//    Variables and Data Types
// -------------------------------
const inputs = document.querySelectorAll('input');
console.log(inputs);
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
const circ = (diameter) => {
    return diameter * Math.PI;
};
// console.log(area('hello'));
console.log(circ(7.5));
// -------------------------------
//            Arrays
// -------------------------------
let names = ["Mohammad", "Ahmad"];
names.push("Hadi");
// names.push(33);
// names[0] = 3;
let numbers = [10, 5, 18];
numbers.push(15);
// numbers.push("Ahmad");
// numbers[0] = "Mohammad";
let mixed = ["Mohammad", 10];
mixed.push("Hadi");
mixed.push(15);
let array = [];
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
    name: "Mohammad",
    age: 29,
};
person.name = "Ahmad";
person.age = 30;
// person.name = 10;
// person.age = '30';
// person.skills = [];
person = {
    name: "Ahmad",
    age: 40,
    // skills : []
};
// -------------------------------
//         Explicit Types
// -------------------------------
// Variables
let sureName;
let height;
// sureName = 30;
sureName = "Abdul Ghafour";
height = 185;
// Arrays
let firstArray;
// firstArray.push("Mohammad");
// firstArray = [30];
firstArray = ["Mohammad"];
firstArray.push("Ahmad");
let secondArray = [];
secondArray.push(30);
// secondArray = ["Mohammad"]
// Objects
let firsObject;
firsObject = { name: "Mohammad", age: 29 };
firsObject = [];
let secondObject;
secondObject = { name: "Mohammad", age: 29 };
// secondObject = []
// Union Types
let unionVariable;
unionVariable = "Mohammad";
unionVariable = 29;
let unionArray;
unionArray = ["Mohammad", 29];
let firstUnionObject;
firstUnionObject = "Mohammad";
firstUnionObject = {};
let secondUnionObject;
secondUnionObject = { name: "Mohammad", age: 29 };
secondUnionObject = { name: 29, age: false };
// secondUnionObject = "Mohammad"
// Any Type
let anyVariable;
anyVariable = "Mohammad";
console.log(anyVariable);
anyVariable = 29;
console.log(anyVariable);
anyVariable = true;
console.log(anyVariable);
let anyArray = [];
anyArray.push(29);
anyArray.push(true);
anyArray.push("Mohammad");
console.log(anyArray);
let anyObject;
anyObject = { name: "Mohammad", age: 29 };
console.log(anyObject);
anyObject = { name: 29, age: "Mohammad" };
console.log(anyObject);
// Functions
let firstGreet = () => {
    console.log("Welcome");
};
// firstGreet = "Welcome"
firstGreet();
let secondGreet;
secondGreet = () => {
    console.log("Welcome");
};
secondGreet();
const firstAdd = (a, b) => {
    console.log(a + b);
};
firstAdd(10, 5);
const secondAdd = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
secondAdd(10, 5);
secondAdd(10, 5, 20);
const thirdAdd = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
thirdAdd(10, 5);
thirdAdd(10, 5, 20);
const forthAdd = (a, b) => {
    return a + b;
};
let result = forthAdd(10, 5);
// Functions Signatures
let funcSign;
funcSign = (numOne, numTow, action) => {
    if (action === "add") {
        return numOne + numTow;
    }
    else {
        return numOne - numTow;
    }
};
console.log(funcSign(2, 3, "add"));
let firstAlias = (user) => {
    console.log(`Hello ${user.name}`);
};
firstAlias({ name: "Mohammad", uid: 29 });
let secondAlias = (user) => {
    console.log(`Hello Again ${user.name}`);
};
secondAlias({ name: "Mohammad", uid: 29 });
