// Basic class
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log(
//       `Hello, my name is ${this.name} and I am ${this.age} years old.`
//     );
//   }
// }

// let person = new Person("Sharaf", "17");
// console.log(person.greet());

// Extends and super
// class Employee extends Person {
//   constructor(name, age, job) {
//     super(name, age);
//     this.job = job;
//   }
//   work() {
//     console.log(`${this.name} is working as a ${this.job}.`);
//   }
// }

// let jane = new Employee("sharaf", 21, "Developer");
// jane.greet();
// jane.work();

//static methods
// class MathUtil {
//   static add(a, b) {
//     return a + b;
//   }
// }
// console.log(MathUtil.add(4, 5));

//Getter and Setter
class Person {
  constructor(name) {
    this._name = name; // Using underscore (_) as a convention for private variables
  }

  get shar() {
    return this._name.toUpperCase(); // Converts name to uppercase before returning
  }
}

let p = new Person("sharaf");
console.log(p.shar); // Output: SHARAF
