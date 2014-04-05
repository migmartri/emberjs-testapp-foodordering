App.OrdersShowRoute = Ember.Route.extend({
  afterModel: function(model, transition) {
    return model.reload();
  }
});
