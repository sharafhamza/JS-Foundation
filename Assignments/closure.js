function createCounter() {
  let increment = 0;
  return function () {
    return console.log(increment++);
  };
}
let counter = createCounter();

counter();
counter();
counter();
