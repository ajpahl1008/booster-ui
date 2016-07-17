Router.configure({
	layoutTemplate: 'home'
});

Router.map(function(){
	this.route('home', {path:'/home'});
	this.route('about', {path:'/about'});
	this.route('serverinfo', {path:'/serverInfo'});
})
