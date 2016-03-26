Template.login.events({
	'click .register-link': function(event){
		$('.panel-login').hide();
		$('.panel-register').fadeIn();
	},
	'click .login-link': function(event){
		$('.panel-register').hide();
		$('.panel-login').fadeIn();
	},
	'submit .register-form': function(event){
		var email = event.target.email.value;
		var password = event.target.passord.value;
		var password2 = event.target.password2.value;

		// Create new user
		if(	isNotEmpty(email) && 
			isNotEmpty(password) &&
			isEmail(email) && 
			areValidPasswords(password, password2)){

			Accounts.createUser({
				email: email,
				password: password,
				profile: {
					usertype: 'customer'
				}	
			}, function (err) {
				if (err) {
					FlashMessages.sendError("There was an error with registration");
				} else {
					FlashMessages.sendSuccess("Account Created! You are now logged in");
					Router.go('/');
				}
			});
		}
		return false;
	}
});

// Validation Rules

// Trim Helper
var trimInput = function(val){
	return val.replace(/^\s*|\s*$/g, "");
};

// Check For Empty Fields
isNotEmpty = function(value) {
    if (value && value !== ''){
        return true;
    }
    FlashMessages.sendError("Please fill in all fields");
    return false;
};

// Validate Email
isEmail = function(value) {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (filter.test(value)) {
        return true;
    }
    FlashMessages.sendError("Please use a valid email address");
    return false;
};

// Check Password Field
isValidPassword = function(password) {
    if (password.length < 6) {
        FlashMessages.sendError("Password must be at least 6 characters");
        return false;
    }
    return true;
};

// Match Password
areValidPasswords = function(password, confirm) {
    if (!isValidPassword(password)) {
        return false;
    }
    if (password !== confirm) {
        FlashMessages.sendError("Passwords do not match");
        return false;
    }
    return true;
};