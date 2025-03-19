function Car(model, color, year) {
  this.model = model;
  this.color = color;
  this.year = year;
  this.wheel = () => {
    return 4;
  };
}

let Bmw = new Car("BMW", "Black", "2025");

console.log(Bmw);
