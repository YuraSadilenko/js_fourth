var multiThree = multiA(3);
var multiFour = multiA(4);

console.log(multiThree(10));
console.log(multiFour(10));

function multiA(a) {
  return function(b) {
    return a * b;
  }
}