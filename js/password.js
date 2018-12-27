var checkPass = comparePassword('yura');

console.log(checkPass('dsad'));
console.log(checkPass('yura'));
console.log(checkPass('dsad'));
console.log(checkPass('yura'));
console.log(checkPass('dsad'));



function comparePassword(password) {
  var attempt = 0;
  var warning = 'incorrect input ' + attempt +'\'s time';

  return function(check) {
    if (check === password) {
      return true;
    } else {
      attempt++;
      if (attempt >= 5) {
        return warning;
      }

      return false;
    }
  };
}