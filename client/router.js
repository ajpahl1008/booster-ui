Router.map(function(){
	this.route('home', {path:'home'});	
	this.route('about', {path:'about'});
	this.route('contact', {path:'contact'});
     this.route('myqueue', {path:'myqueue'});
	this.route('search', {path:'search'});
	this.route('serverInfo', {path:'serverInfo'});
	this.route('patches', {patch:'entry/patches'});
	this.route('entry', {patch:'entry'});

})


Router.route('/', function () {
  this.render('home');
});
