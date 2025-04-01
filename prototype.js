// Basic class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

let person = new Person("Sharaf", "17");
console.log(person.greet());

class Employee extends Person {
  constructor(name, age, job) {
    super(name, age);
    this.job = job;
  }
  work() {
    console.log(`${this.name} is working as a ${this.job}.`);
  }
}

let jane = new Employee("sharaf", 21, "Developer");
jane.greet();
jane.work();
