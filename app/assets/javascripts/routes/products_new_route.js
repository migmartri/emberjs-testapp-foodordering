App.ProductsNewRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    controller.set('title', null);
    controller.set('upload_picture', null);
  }
});
