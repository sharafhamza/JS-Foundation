function Animal() {}
Animal.prototype.speak = function () {
  return "Animal Speaking";
};

function Dog() {}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
  return "Woof!";
};

console.log(Dog.prototype.bark());
