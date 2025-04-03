function Animal() {}
Animal.prototype.speak = function () {
  return "Animal Speaking";
};

console.log(Animal.prototype.speak());
