// ES6+ Assignment Questions
/**
 * 1.Try converting these codes to ES6 syntax-
 */
/**
 * var aloo = 1;
    if (aloo == 1) {
    var a = 2;
   console.log(a);
}
console.log(aloo);
 */
//solution:

let aloo = 1;
if (aloo === 1) {
  let a = 2;
  console.log(a);
}
console.log(aloo);

/**
 * var multiply = function(x, y) {
  return x * y;
};
*/
let multiply = (x, y) => {
  return x * y;
};
console.log(multiply(5, 4));

/**
 * ```jsx
var customer = {
  name: "Bhaalo"
};
var card = {
  amount: 20,
  product: "Aaalo",
  unitprice: 50
};
var message = "Hello " + customer.name + " wants to buy " + card.amount + " " + card.product + " for price of " + card.unitprice + " per piece"
```
 */

let customer = {
  name: "Bhaalo",
  card: {
    amount: 20,
    product: "Aaalo",
    unitprice: 50,
  },
};

let message = `Hello   ${customer.name} wants to buy ${customer.card.amount} ${customer.card.product} for price of  ${customer.card.unitprice}  per piece"`;
console.log(message);

/**
 * var Neog = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"],
CEO = Neog[0],
Mentor = Neog[2];
 */

const [ceo, , mentor] = ["Tanvi", "Swap", "Tanay", "MA", "CA", "PA", "TA"];
console.log(ceo, mentor);

/**
 * var arr = ["MA", "TA", "PA", "CA"];
var firstName = arr[0],
var surname = arr[1];
console.log(firstName);
console.log(surname);
 */
const [firstName, surname] = ["MA", "TA", "PA", "CA"];
console.log(firstName, surname);

/**
 * var Aaloo = "Tasty";
var Bhaloo = "Cute";
var Obj = {
  Aaloo: Aaloo,
  Bhaloo: Bhaloo
};
 */
let Aaloo = "tasty",
  Bhaalo = "cute";
const obj = {
  Aaloo,
  Bhaalo,
};
console.log(obj);

/**
 * var a = 5;
var b = 10;
console.log("Fifteen is ".concat(a + b, " and n0t ").concat(2 * a + b, "."));
 */
const a = 5,
  b = 10;
console.log(`Fifteen is ${a + b}  and not ${2 * a + b}`);

/**
 * ```jsx
var arithmeticsObj = {
  sum: function sum(num1, num2) {
    return num1 + num2;
  },
  multiply: function multiply(num1, num2) {
    return num1 * num2;
  }
};
```
 */
const arithmeticsObj = {
  sum: (num1, num2) => num1 + num2,
  multiply: (num1, num2) => num1 * num2,
};
// console.log(arithmeticsObj.sum(2,4))

/**
 * ```jsx
var avengers = {
  operation: "Assemble",
  members: [
    {
      ironMan: "Tony Stark"
    },
    {
      captainAmerica: "Steve Rogers"
    },
    {
      blackWidow: "Natasha Romanoff"
    }
  ]
};
var operation = avengers.operation,
  members = avengers.members;
```
 */
const avengers = {
  operations: "Assemble",
  members: [
    {
      ironMan: "Tony Stark",
    },
    {
      captainAmerica: "Steve Rogers",
    },
    {
      blackWidow: "Natasha Romanoff",
    },
  ],
};
const { operation, members } = avengers;

//Question 2
//convert ES6 to Es5

/**
 * ```jsx
const packIt = (...args) => console.log(args)

packIt(1,2,3,5,5)
```
 */
function packIt(num1, num2, num3, num4, num5) {
  console.log(num1, num2, num3, num4, num5);
}
packIt(1, 2, 3, 5, 5);

//3. Guess the output
const hello = () => "Hello";
const welcome = () => "Welcome";
const [Hello = hello(), Welcome = welcome()] = ["Namaste"];
console.log(Hello, Welcome);

//output : Namaste Welcome

// const obj1 = {
//     aloo : 1,
//     bhallo : 2
// }

// const {c : aloo = [2,3,4].push(5), aloo} = obj

// console.log(aloo)

//output : Error
