App.IndexRoute = Ember.Route.extend({
  beforeModel: function(transition){
    if(this.controllerFor("currentCompany").get('isSignedIn')){
      this.transitionTo('currentOrder');
    }
  }
});
