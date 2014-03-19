App.ProductsNewRoute = Ember.Route.extend({
  setupController: function(controller, model) {
    controller.set('title', null);
    controller.set('upload_picture', null);
    controller.set('model', null);
    modal = Bootstrap.ModalManager.open('manualModal', 'Create a product', 'products/new', controller.dialogButtons, controller);

    /* Transition to route when closing the popup */
    modal.reopen({
      close: function(){
        this.destroy();
        controller.transitionToRoute('products');
      }
    });
  }
});
