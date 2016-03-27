Router.configure({
	layoutTemplate: 'layout'
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
});