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
});