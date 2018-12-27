var countOne = counter();

console.log(countOne());
console.log(countOne());
console.log(countOne());
console.log(countOne());
console.log(countOne());
console.log(countOne());


/*task 1 (usual counter)*/
function counter1() {
  var call = 0;
  return function() {
    return ++call;
  }
}

/*task 4 (counter that return method)*/
var countTwo = counter2();

console.log(countTwo());
console.log(countTwo());
console.log(countTwo());
console.log(countTwo());
console.log(countTwo());


function counter2() {
  var call = 0;
  return {
    counterMethod: function() {
      return ++call;
    }
  }  
}

