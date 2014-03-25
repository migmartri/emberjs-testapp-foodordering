App.CurrentOrderRoute = Ember.Route.extend({
  model: function() {
    self = this;
    return $.getJSON('/api/v1/orders/current').then(function(payload) {
      return self.store.find('order', payload.order.id);
    });
  },
  beforeModel: function(){
    /* Memory freed */
    this.store.unloadAll('order');
    this.store.unloadAll('line_item');
  }
});
