App.IndexController = Ember.ObjectController.extend({
  actions: {
    createOrder: function(){
      controller = this;
      this.store.createRecord("order").save().then(function(order){
        controller.set('model', order);
        console.info('Order created');
        //controller.transitionToRoute('order', order);
      });
    },
    addLineItem: function(product) {
      order = this.get('model');
      /* Search for a line item, if it does not exist create it 
      * TODO*/
      var store = this.store;
      var existing = this.store.filter('lineItem', function(li) { 
        return li.get('productId') == product.get('id');
      }).then(function(existing) {
          if(existing.get('length') > 0){
            elem = existing.get('content')[0];
            elem.incrQty().save();
          }else{
            store.createRecord("lineItem", {product: product, order: order}).save();
          }
      });
    }
  }
});
