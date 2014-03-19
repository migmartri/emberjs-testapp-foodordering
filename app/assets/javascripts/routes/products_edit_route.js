App.ProductsEditRoute = Ember.Route.extend({
  model: function(){
  	return this.modelFor('product');
  },
  setupController: function(controller, model) {
    controller.set('model', model);
    modal = Bootstrap.ModalManager.open('manualModal', 'Update a product', 'products/edit', controller.dialogButtons, controller);

    /* Transition to route when closing the popup */
    modal.reopen({
      close: function(){
        this.destroy();
        controller.transitionToRoute('products');
      }
    });
  }
});
