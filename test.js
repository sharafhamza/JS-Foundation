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
function convertNumber(str) {
  const num = Number(str);
  return isNaN(num) ? "Not A Number" : num;
}

console.log(convertNumber("5"));
