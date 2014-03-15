App.OrdersRoute = Ember.Route.extend({
  model: function(){
  	return this.store.find('order').then(function(orders){
       return orders.filterBy('aasm_state', 'closed');
    })
  }
});
