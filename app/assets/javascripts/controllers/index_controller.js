App.IndexController = Ember.Controller.extend({
  actions: {
    createOrder: function(){
      controller = this;
      this.store.createRecord("Order").save().then(function(order){
        // TODO, fixme
        controller.transitionToRoute('order', order);
      }, function(){
       console.error("Error");
      });
    }
  }
});
