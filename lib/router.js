Router.configure({
	layoutTemplate: 'layout'
});

var OnBeforeActions = {
	isStaff: function(){
		// if logged in
		if (Meteor.user()) {
			// Check if staff
			if (Meteor.user().profile.usertype == 'staff') {
				Router.go('/staff');
			} else {
				this.next();
			}
		} else {
			this.next();
		}
	}
};

Router.onBeforeAction(OnBeforeActions.isStaff, {
	only: ['mytickets']
});

Router.map(function(){
	this.route('mytickets',{
		path: '/',
		template: 'mytickets',
		data: function(){
			templateData = {
				tickets: Tickets.find({customer: Meteor.userId()})
			};
			return templateData;
		}
	});

	this.route('ticket', {
		path: '/ticket/:_id',
		template: 'ticket',
		data: function(){
			var currentTicket = this.params._id;
			return Tickets.findOne({_id: currentTicket});
		}
	});

	this.route('staff', {
		path: '/staff',
		template: 'stafftickets',
		data: function() {
			templateData = {
				tickets: Tickets.find()
			};
			return templateData;
		}
	});
});