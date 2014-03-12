App.CurrentOrderNewSuggestionRoute = Ember.Route.extend({
  model: function(){
    return this.store.createRecord('Suggestion');
  },
  setupController: function(controller, model) {
    controller.set('model', model);
    Bootstrap.ModalManager.open('manualModal', 'Suggest a product', 'current_order/new_suggestion', controller.manualButtons, controller);
  }
});
