function Car(model, color, year, owner) {
  this.model = model;
  this.color = color;
  this.year = year;
  this.owner = owner;
  this.wheel = () => {
    return 4;
  };
}

function CarOwner(name, age) {
  this.name = name;
  this.age = age;
}

let carOwner = new CarOwner("sharaf", 18);

const Bmw = new Car("BMW", "Black", "2025", carOwner);
console.log(Bmw.prototype());
