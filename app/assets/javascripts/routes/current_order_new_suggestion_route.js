App.CurrentOrderNewSuggestionRoute = Ember.Route.extend({
  model: function(){
    return this.store.createRecord('Suggestion');
  },
  setupController: function(controller, model) {
    controller.set('model', model);
    modal = Bootstrap.ModalManager.open('manualModal', 'Suggest a product', 'current_order/new_suggestion', controller.manualButtons, controller);

    /* Transition to route when closing the popup */
    modal.reopen({
      close: function(){
        this.destroy();
        controller.transitionToRoute('currentOrder');
      }
    });
  }
});
