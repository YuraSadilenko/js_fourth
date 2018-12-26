var arr = [1, 2, 3, 4, 5, 6, 7];

console.log(filter(arr, function(a) {
  return a % 2 == 0
})); // 2,4,6
alert(filter(arr, inBetween(3, 6))); // 3,4,5,6
alert(filter(arr, inArray([1, 2, 10]))); // 1,2

function filter(arr, func) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    var value = arr[i];
    if (func(value)) {
      result.push(value);
    }
  }
  return result;
}

function inBetween(a, b) {
  return function(number) {
    return number >= a && number <= b;
  }
}

function inArray(arr) {
  return function(number) {
    return arr.indexOf(number) != -1;
  }
}


