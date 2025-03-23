if (true) {
  // var x = 10;
}
//global scope means it can be accesss by anywhere even before the function declaration
function access() {
  // access is local to function
  var x = 10;
  function test() {
    console.log(x);
    content = "hi from auto global";
  }
  test();
}
access();

console.log(content);
