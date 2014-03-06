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
      console.warn(order)
      console.warn(product)
      /* Search for a line item, if it does not exist create it 
      * TODO*/
      this.store.createRecord("lineItem", {product: product, order: order}).save().then(function(li){
        console.warn("Created");
      })
    }
  }
});
