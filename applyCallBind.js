// Function.prototype methods

// Function.prototype.apply()
// Function.prototype.bind()
// Function.prototype.call()
// Function.prototype.isGenerator()
// Function.prototype.toSource()
// Object.prototype.toSource
// Function.prototype.toString()
// Object.prototype.toString

// Apply --------------------------------------------------------------------------------
// Function.prototype.apply()

// syntax:
//      - function.apply(this, [argumentsArray])

// description:
//      - allows a function/object belonging to an object 'x' to be called and assigned to an object 'y'

// Ex. 1
// Using push()
//  - pushing an array inside another array, the whole array is treated as one element
let array = ["a", "b"];
let elements = [1, 2, 3];

array.push(elements);
console.log(array); // ['a', 'b', [1, 2, 3]]

// Using apply()
//  - push the array elements individually using apply

let arr = ["a", "b"];
let elements = [1, 2, 3];

arr.push.apply(arr, elements);
console.log(arr); // ['a', 'b', 1, 2, 3]

// elements array is the arguments
// this is pointing to arr variable
// elements items are pushed into arr

// Ex. 2
// Using Math.max
//  - find an element with the maximum value form a pool of elements
//  - if the values are in an array, NaN is returned

let nums = Math.max(100, 2, 31, 30, 101, 15, 69, 48, 22, 7); // 101

let numbers = [53, 65, 25, 37, 78];
console.log(Math.max(numbers)); // NaN

// Using apply()
// apply takes all values in the array as individual arguments, and .max() is applied to them
// this is optional, if the arguments array points to the same array, null can be used
let numbers = [53, 65, 25, 37, 78];
let maxNum = Math.max.apply(null, numbers);

// Call --------------------------------------------------------------------------------
// Function.prototype.call()

// syntax:
//      - function.call(thisArg, arg1, arg2, ...)

// description:
//      - allows a function/object belonging to an object 'x' to be called and assigned to an object 'y'

// Ex. 1
// Using constructor chaining

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Pizza(name, price) {
  Product.call(this, name, price);
  this.category = "pizza";
}

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = "toy";
}

let pizza = new Pizza("pepperoni", 50);
let toy = new Toy("robot", 40);

console.log(toy);
console.log(pizza);

// Ex. 2
// - the function sleep is called with the object 'obj' as an argument
//   the properties of 'obj' are set in this.animal and this.sleepDuration

function sleep() {
  let reply = [this.animal, "typically sleep between", this.sleepDuration].join(" ");
  console.log(reply); // I typically sleep between 12 and 16 hours
}

let obj = {
  animal: "I",
  sleepDuration: "12 and 16 hours"
};

sleep.call(obj);

// Bind --------------------------------------------------------------------------------
// Function.prototype.call()

// syntax:
//      - function.bind(this, arg1, arg2, arg)

// description:
//      - allows a function/object belonging to an object 'x' to be called and assigned to an object 'y',
//        but returns an exotic bound function

// Ex. 1

let x = 9;
let module = {
  x: 81,
  getX: function() {
    return this.x;
  }
};
console.log(module.getX); // 81

let retrieveX = module.getX;
console.log(retrieveX()); // 9 - calls the x from global scope

let boundGetX = retrieveX.bind(module);
console.log(boundGetX()); // 81 - binds module to the retrieveX call
