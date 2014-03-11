App.ProductsController = Ember.ArrayController.extend({
  actions: {
    delete: function(model){
      Bootstrap.GNM.push('Deleted!', model.get('title') + ' has been deleted.', 'success');
      model.destroyRecord();
    }
  }
});
