var password = 'yura';
var check = prompt('Write your password');
var checkPass = checkPassword();

console.log(checkPass);

function checkPassword() {
  var attempt = 0;
  var greet = 'Welcome yura';
  var warning = 'this is ' + attempt + '\'s try';

  return function() {

    if (check === password) {
      return greet;
    } else if (check !== password) {
      console.log('Incorrect password.');
      ++attempt;
      if (attempt > 5) {
        return warning;
      } 
    }
    return false;
  }
}