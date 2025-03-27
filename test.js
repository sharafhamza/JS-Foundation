// const value = 36;

// if (value % 2 === 0) {
//   console.log("Number is even");
// } else {
//   console.log("Number is odd");
// }

// const x = 10;
// const y = 40;
// const z = 30;

// if (x < y && x < z) {
//   console.log("x is the smallest number");
// } else if (z < x && z < y) {
//   console.log("z is the smallest number");
// } else if (y < z && y < x) {
//   console.log("y is the smallest number");
// }

// const a = 10;
// const b = 7;
// const c = 6;

// if (a + b > c && a + c > b && b + c > a) {
//   console.log("yes you can form a triangle");
// } else {
//   console.log("no you cannot");
// }

const a = 5;
const b = 4;
const c = 5;

if (a + b > c && a + c > b && b + c > a) {
  if (a == b && b == c && c == a) {
    console.log("Equilateral Triangle");
  } else if (a === b || b === c || c === a) {
    console.log("Isosceles Triangle ");
  } else {
    console.log("Scalene Triangle");
  }
} else {
  console.log("no you cannot");
}
