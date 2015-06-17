if (Meteor.isClient) {
  Router.route('/', function () {
    if (!Meteor.user())
      this.render('landpage');
    else
      Router.go('/dashboard');
  });

  // Home
  Router.route('/dashboard', {
    controller : 'HomeController',
    action : 'index'
  });

  // Controller of protected routes inside logged area
  ApplicationController = RouteController.extend({
    layoutTemplate : 'appTemplate',

    onBeforeAction : function(){
      if (!Meteor.user())
        Router.go('/');

      this.next();
    }
  });

  HomeController = ApplicationController.extend({
    index : function(){
      this.render('dashboardHome');
    }
  });

}