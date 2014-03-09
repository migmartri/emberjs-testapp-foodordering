App.ApplicationRoute = Ember.Route.extend({
  needs: 'currentCompany',
  beforeModel: function(transition){
    /* Check we have set the current company and redirect otherwise */
    if(transition.targetName != 'index' && !this.controllerFor("currentCompany").get('isSignedIn')){
      this.transitionTo('index');
    }
  }
});
