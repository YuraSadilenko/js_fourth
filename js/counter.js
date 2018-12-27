var count = counter();

console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());

function counter() {
  var call = 0;
  return function() {
    return ++call;
  }
}