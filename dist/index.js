"use strict";
//Basic Types
let id = 5;
let company = "Traversy Media";
let isPublished = true;
let x = "Hello";
//Can change 'any' types ex: from string to boolean
x = true;
let age;
age = 36;
//Declaring arrays
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "Hello"];
//Tuple
let person = [1, "Kyra", true];
//Tuple Array
let employee;
employee = [
    [1, "Kyra"],
    [2, "James"],
    [3, "Bronte"],
];
//Union
let pid;
pid = 22;
pid = "22";
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
// console.log(Direction1.Up) will be 0 because Up is at index 0
// can change value of index Up = 1 and all others following will go in order ex: 2, 3, 4
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
//Objects
const user = {
    id: 1,
    name: "Kyra",
};
//Type Assertion
let cid = 1;
let customerId = cid;
//now cid must be a number
//Functions
function addNum(x, y) {
    return x + y;
}
// x & y both get set to be of type number but : number outside param bracket is what return value is expected to be
//Void allows return value to be either side of pipe value
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "Kyra",
};
const add = (x, y) => x + y;
//Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, "Kyra");
console.log(brad.register());
//Subclass 
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'James', 'Developer');
console.log(emp.name);
console.log(emp.register());
//Generics 
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["Kyra", "James", "Bronte"]);
//error because set type to number 
// numArray.push("Hello")
//correct
strArray.push("Hello");
