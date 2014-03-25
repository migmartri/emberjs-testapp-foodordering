App.OrdersShowRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    /* We ask the server to load all the content including relationships */
    model.reload().then(function(){
      controller.set('model', model);
    });
  }
});
