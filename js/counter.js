var countOne = counter1();

console.log(countOne()); //1
console.log(countOne()); //2
console.log(countOne()); //3 
console.log(countOne()); //4
console.log(countOne()); //5
console.log(countOne()); //6


/*task 1 (usual counter)*/
function counter1() {
  var call = 0;
  return function() {
    return ++call;
  }
}

/*task 4 (counter that return method)*/
var countTwo = counter2();

console.log(countTwo.counterMethod()); //1
console.log(countTwo.counterMethod()); //2
console.log(countTwo.counterMethod()); //3
console.log(countTwo.counterMethod()); //4
console.log(countTwo.counterMethod()); //5


function counter2() {
  var call = 0;
  return {
    counterMethod: function() {
      return ++call;
    }
  }  
}

