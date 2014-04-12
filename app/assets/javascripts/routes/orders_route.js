App.OrdersRoute = Ember.Route.extend({
  model: function(params){
    this.controllerFor('orders').set('currentPage', parseInt(params.page));
  	return this.store.find('order', {page: params.page, closed: true})
  }
});
