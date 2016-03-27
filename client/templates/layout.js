// Check if staff
Template.registerHelper('isStaff', function(){
	if (Meteor.user().profile.usertype == 'staff') {
		return true;
	};
});

// Format the date using momentjs
Template.registerHelper('formatDate', function (date) {
	return moment(date).format('MMMM Do YYYY, h:mm:ss a');
});

// Capitalize the first letter
Template.registerHelper('capFirst', function (text) {
	return String(text).charAt(0).toUpperCase() + String(text).slice(1);
});

