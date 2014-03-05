App.IndexController = Ember.ObjectController.extend({
  actions: {
    createOrder: function(){
      controller = this;
      this.store.createRecord("order").save().then(function(order){
        controller.set('model', order);
        console.info('Order created');
        //controller.transitionToRoute('order', order);
      });
    }
  }
});
