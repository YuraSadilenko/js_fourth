var form1 = {
	name: {
		value: 'Masha',
		validationRules: {
			minLength: 3,
			maxLength: 20,
			required: true,
		},
		errorMessage: '',
	},
	email: {
		value: 'email@example.com',
		validationRules: {
			email: true,
			required: true,
		},
		errorMessage: '',
	},
};

var form2 = {
	name: {
		value: 'Dasha',
		validationRules: {
			minLength: 3,
			maxLength: 20,
			required: true,
		},
		errorMessage: '',
	},
	email: {
		value: 'email@example.com',
		validationRules: {
			email: true,
			required: false,
		},
		errorMessage: '',
	},
};

var form3 = {
	name: {
		value: 'Sasha',
		validationRules: {
			minLength: 3,
			maxLength: 20,
			required: true,
		},
		errorMessage: '',
	},
	email: {
		value: 'email.example.com',
		validationRules: {
			email: true,
			required: true,
		},
		errorMessage: '',
	},
};

var validationForm1 = validation();
console.log(validationForm1(form3));

var validationForm2 = validation();
console.log(validationForm2(form2));

var validationForm3 = validation();
console.log(validationForm3(form1));

function validation() {
  var results = [];
  function checkResults(obj) {
    for(key in obj) {
      if(obj[key].validationRules.required) {
        results.push(checkRequired(obj[key]));
      }
      if(obj[key].validationRules.minLength) {
        results.push(checkMinLength(obj[key]));
      }
      if(obj[key].validationRules.maxLength) {
        results.push(checkMaxLength(obj[key]));
      }
      if(obj[key].validationRules.email) {
        results.push(checkEmail(obj[key]));
      }
    }
    return results.every(checkedResults);
  }

  function checkRequired(obj) {
    var value = obj.value;
    if ((value.length === 0) || value.split('').some(checkSpaces)) {
      obj.errorMessage = 'ERROR: This is required field';
      return false;
    }
    return true;
  }

  function checkMinLength(obj) {
    var value = obj.value;
    var requireMinLength = obj.validationRules.minLength;
    if (value.length >= requireMinLength) {
      return true;
    }
    obj.errorMessage = 'ERROR: Min length is ' + requireMinLength;
    return false;
  }

  function checkMaxLength(obj) {
    var value = obj.value;
    var requireMaxLength = obj.validationRules.maxLength;
    if (value.length <= requireMaxLength) {
      return true;
    }
    obj.errorMessage = 'ERROR: Max length is ' + requireMaxLength;
    return false;
  }

  function checkEmail(obj) {
    var email = obj.value;
    var ruOrUa = email.slice(-3);
    var comOrOrg = email.slice(-4);
    if (email.indexOf('@') !== -1 && (ruOrUa === '.ru' || ruOrUa === '.ua' || comOrOrg === '.com' || comOrOrg === '.org')) {
      return true;
    }
    obj.errorMessage = 'ERROR: Your email is invalid';
    return false;
  }

  function checkedResults(item) {
    return item === true;
  }

  function checkSpaces(item) {
    return item === ' ';
  }

  return checkResults;
}