App.ProductsRoute = Ember.Route.extend({
  queryParams: {
    page: { refreshModel: true }
  },
  model: function(params) {
  	return this.store.find('product', {page: params.page})
  },
});
