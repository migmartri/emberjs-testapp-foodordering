App.ProductsController = Ember.ArrayController.extend({
  actions: {
    delete: function(model){
      model.destroyRecord();
    }
  }
});
