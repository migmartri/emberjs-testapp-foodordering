App.IndexRoute = Ember.Route.extend({
  /* TODO rewrite this so we don't need to get the first object */
  model: function() {
    return this.store.find("order", {current: true});
  },
  setupController: function(controller, model){
    controller.set('model', model.get('firstObject'));
  }
});
