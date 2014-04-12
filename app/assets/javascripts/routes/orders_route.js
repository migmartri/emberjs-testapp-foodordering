App.OrdersRoute = Ember.Route.extend({
  queryParams: {
    page: {
      refreshModel: true /* After a page change we refresh the data */
    }
  },
  model: function(params){
  	return this.store.find('order', {page: params.page, closed: true})
  }
});
