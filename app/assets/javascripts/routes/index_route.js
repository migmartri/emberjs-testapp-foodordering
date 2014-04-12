App.IndexRoute = Ember.Route.extend({
  beforeModel: function(transition){
    if(this.get("currentCompany").get('isSignedIn')){
      this.transitionTo('currentOrder');
    }
  }
});
