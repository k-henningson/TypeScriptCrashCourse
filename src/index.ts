//Basic Types
let id: number = 5;
let company: string = "Traversy Media";
let isPublished: boolean = true;
let x: any = "Hello";
//Can change 'any' types ex: from string to boolean
x = true;
let age: number;
age = 36;

//Declaring arrays
let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, "Hello"];

//Tuple
let person: [number, string, boolean] = [1, "Kyra", true];
//Tuple Array
let employee: [number, string][];
employee = [
  [1, "Kyra"],
  [2, "James"],
  [3, "Bronte"],
];

//Union
let pid: string | number;
pid = 22;
pid = "22";

//Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

// console.log(Direction1.Up) will be 0 because Up is at index 0
// can change value of index Up = 1 and all others following will go in order ex: 2, 3, 4

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

//Objects
const user: { id: number; name: string } = {
  id: 1,
  name: "Kyra",
};

//Type Assertion
let cid: any = 1;
let customerId = <number>cid;
//now cid must be a number

//Functions
function addNum(x: number, y: number): number {
  return x + y;
}
// x & y both get set to be of type number but : number outside param bracket is what return value is expected to be

//Void allows return value to be either side of pipe value
function log(message: string | number): void {
  console.log(message);
}

//Interfaces
interface UserInterface {
  id: number;
  name: string;
  //? will make it optional
  age?: number;
}

const user1: UserInterface = {
  id: 1,
  name: "Kyra",
};

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;

//Classes
class Person {
  id: number;
  name: string;

  constructor(id: number, name: string) {
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
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name)
    this.position = position
  }
}

const emp = new Employee(3, 'James', 'Developer')
console.log(emp.name)
console.log(emp.register())

//Generics 
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(["Kyra", "James", "Bronte"])

//error because set type to number 
// numArray.push("Hello")
//correct
strArray.push("Hello")
