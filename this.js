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

function Person(name, age) {
  if (age <= 0) {
    throw new Error("Age must be a positive number");
  }
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  return `Hello my name is ${this.name}`;
};
let newPerson = new Person("Sharaf", 17);
console.log(Object.getPrototypeOf(newPerson));
