App.ProductsController = Ember.ArrayController.extend({
  queryParams: ['page'],
  sortProperties: ['created_at'],
  sortAscending: false,
  /* Pagination required */
  page: 1,
  totalPages: (function(){
    return this.store.metadataFor("product")['total_pages'];
  }).property(),
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
