// let teaCollection = [];
// let tea;

// do {
//   tea = prompt("Enter your prompt here");
//   if (tea !== "stop") {
//     teaCollection.push(tea);
//   }
// } while (tea !== "stop");

// let numbers = [2, 5, 7, 9, 11];
// let double = [];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] == 7) {
//     continue;
//   }

//   let multiply = numbers[i] * 2;
//   double.push(multiply);
// }
// console.log(double);

// Test 1
// function convertNumber(str) {
//   const num = Number(str);
//   return isNaN(num) ? "Not A Number" : num;
// }

// console.log(convertNumber("5"));

// Test 2
// function flipBoolean(input) {
//   return !Boolean(input);
// }

// console.log(flipBoolean(false));

// Test 3
// function whatAmI(value) {
//   if (typeof input === "number") {
//     return "I'm a number!";
//   } else if (typeof input === "string") {
//     return "I'm a string!";
//   }
//   return "I am the type of " + typeof value;
// }

// console.log(whatAmI(true));

// Test 4
// function isItTruthy(input) {
//     if (input) {
//         return "It's truthy!";
//     }

//     return "It's falsey!";
// }

// Test 5
// function arrayNumber(arr) {
//   return arr.filter((item) => typeof item === "number");
// }

// const mixedArr = ["hello", 2, 4, "sharaf", "al", "hamza"];

// console.log(arrayNumber(mixedArr));
// console.log(mixedArr);

// Test 6
// function reverseArray(arr) {
//   return arr.reverse();
// }

// const mixedArr = ["hello", 2, 4, "sharaf", "al", "hamza"];
// console.log(reverseArray(mixedArr));

// const numbers = [2, 3, 4, 5, 6, 1, 44, 55];

// let smallNumber = numbers[0];
// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] < smallNumber) {
//     smallNumber = numbers[i];
//   }
// }
// console.log(smallNumber);

// function findMax(arr) {
//   return Math.max(...arr);
// }
// console.log(findMax([2, 56, 77]));

const numbers = [2, 3, 4, 5, 6, 1, 44, 55];

function isEven(x) {
  return x % 2 === 0;
}
let output = numbers.filter(isEven);

console.log(output);
