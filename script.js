// -------------------------------
//    Variables and Data Types
// -------------------------------
var inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(function (input) {
    console.log(input);
});
var character = 'mario';
var age = 30;
var isBlackBelt = false;
// character = 20;
character = 'luigi';
// age = 'yoshi';
age = 40;
// isBlackBelt = 'yes';
isBlackBelt = true;
var circ = function (diameter) {
    return diameter * Math.PI;
};
// console.log(area('hello'));
console.log(circ(7.5));
// -------------------------------
//            Arrays
// -------------------------------
var names = ["Mohammad", "Ahmad"];
names.push("Hadi");
// names.push(33);
// names[0] = 3;
var numbers = [10, 5, 18];
numbers.push(15);
// numbers.push("Ahmad");
// numbers[0] = "Mohammad";
var mixed = ["Mohammad", 10];
mixed.push("Hadi");
mixed.push(15);
var array = [];
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
var person = {
    name: "Mohammad",
    age: 29
};
person.name = "Ahmad";
person.age = 30;
// person.name = 10;
// person.age = '30';
// person.skills = [];
person = {
    name: "Ahmad",
    age: 40
};
// -------------------------------
//         Explicit Types
// -------------------------------
// Variables
var sureName;
var height;
// sureName = 30;
sureName = "Abdul Ghafour";
height = 185;
// Arrays
var firstArray;
// firstArray.push("Mohammad");
// firstArray = [30];
firstArray = ["Mohammad"];
firstArray.push("Ahmad");
var secondArray = [];
secondArray.push(30);
// secondArray = ["Mohammad"]
// Objects
var firsObject;
firsObject = { name: "Mohammad", age: 29 };
firsObject = [];
var secondObject;
secondObject = { name: "Mohammad", age: 29 };
// secondObject = []
// Union Types
var unionVariable;
unionVariable = "Mohammad";
unionVariable = 29;
var unionArray;
unionArray = ["Mohammad", 29];
var firstUnionObject;
firstUnionObject = "Mohammad";
firstUnionObject = {};
var secondUnionObject;
secondUnionObject = { name: "Mohammad", age: 29 };
secondUnionObject = { name: 29, age: false };
// secondUnionObject = "Mohammad"
