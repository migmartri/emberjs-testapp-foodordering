App.ProductsEditRoute = Ember.Route.extend({
  model: function(){
  	return this.modelFor('product');
  },
  setupController: function(controller, model) {
    controller.set('model', model);
    Bootstrap.ModalManager.open('manualModal', 'Update a product', 'products/edit', controller.dialogButtons, controller);
  }
});
