App.ProductsController = Ember.ArrayController.extend({
  sortProperties: ['created_at'],
  sortAscending: false,
  actions: {
    delete: function(model){
      Bootstrap.GNM.push('Deleted!', model.get('title') + ' has been deleted.', 'success');
      model.destroyRecord();
    },
    show: function() {
      return Bootstrap.ModalManager.show('productNew');
    }
  }
});
