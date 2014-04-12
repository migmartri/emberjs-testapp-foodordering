App.OrdersController = Ember.ArrayController.extend({
  queryParams: ['page'],
  sortProperties: ['created_at'],
  sortAscending: false,
  page: 1,
  actions:{
    loadPage: function(incOrDec){
      this.transitionToRoute({queryParams: {page: this.get('page') + incOrDec}});

    }
  }
});
