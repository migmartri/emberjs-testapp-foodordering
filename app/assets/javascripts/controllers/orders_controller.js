App.OrdersController = Ember.ArrayController.extend({
  queryParams: ['page'],
  sortProperties: ['created_at'],
  sortAscending: false,
  currentPage: 1,
  actions:{
    loadPage: function(incOrDec){
      this.transitionToRoute('orders', {page: this.get('currentPage') + incOrDec});
    }
  }
});
