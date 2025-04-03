// Problem 1 solved
// function Animal() {}
// Animal.prototype.speak = function () {
//   return "Animal Speaking";
// };

// function Dog() {}

// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.bark = function () {
//   return "Woof!";
// };
// Dog.prototype.constructor = Dog;

// console.log(Dog.prototype.bark());

//Problem 2
// function Person(name, age) {
//   if (age <= 0) {
//     throw new Error("Age must be a positive number");
//   }
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.greet = function () {
//   return `Hello my name is ${this.name}`;
// };
// let newPerson = new Person("Sharaf", 17);
// console.log(Object.getPrototypeOf(newPerson));

//Problem 3
// Task 3: Static Methods in Classes
// Vehicle Class
// class Vehicle {
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//   }

//   getDetails() {
//     return `Make: ${this.make}, Model: ${this.model}`;
//   }

//   move() {
//     return "The vehicle is moving";
//   }

//   // Static method to check if an object is an instance of Vehicle
//   static isVehicle(obj) {
//     return obj instanceof Vehicle;
//   }
// }

// // Car Class (extends Vehicle)
// class Car extends Vehicle {
//   startEngine() {
//     return "Engine started";
//   }

//   move() {
//     return "The car is driving";
//   }
// }
