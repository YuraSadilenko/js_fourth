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
			required: false,
		},
		errorMessage: '',
	},
};

var form3 = {
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
		value: 'email.example.com',
		validationRules: {
			email: true,
			required: true,
		},
		errorMessage: '',
	},
};
