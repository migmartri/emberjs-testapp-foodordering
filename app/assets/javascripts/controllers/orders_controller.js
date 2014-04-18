App.OrdersController = Ember.ArrayController.extend({
  queryParams: ['page'],
  sortProperties: ['created_at'],
  sortAscending: false,
  /* Pagination required */
  page: 1,
  totalPages: (function(){
    return this.store.metadataFor("order")['total_pages'];
  }).property(),
  actions: {
    loadPage: function(pageNumber){
      this.transitionToRoute({queryParams: {page: pageNumber}});
    }
  }
});
