Template.mytickets.events({
	'submit .open-ticket': function(event) {
		var name = event.target.name.value;
		var email = event.target.email.value;
		var subject = event.target.subject.value;
		var department = event.target.department.value;
		var priority = event.target.priority.value;
		var message = event.target.message.value;
		var status = 'new';

		// Insert Ticket
		Tickets.insert({
			name: name,
			email: email,
			subject: subject,
			department: department,
			priority: priority,
			message: message,
			status: status,
			customer: Meteor.userId(),
			createdAt: new Date() // current time
		});

		$('#myTicketModal').modal('hide');
		FlashMessages.sendSuccess('Ticket submitted');
		return false;
	},
	'click .close-ticket': function(){
		if (confirm('Are you sure you want to delete this ticket')) {
			Tickets.remove(this._id);
			FlashMessages.sendSuccess('Ticket closed');
			return false;
		}
	}
});