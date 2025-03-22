if (true) {
  // var x = 10;
}
function access() {
  // access is local to function
  var x = 10;
  function test() {
    console.log(x);
  }
  test();
}
access();
