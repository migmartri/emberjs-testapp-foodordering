App.IndexController = Ember.Controller.extend({
  actions: {
    createOrder: function(){
      order = this.store.createRecord("Order");
      order.save().then(function(order){
        //transitionToRoute('order', order);
        console.log("Order created");
      });
    }
  }
});
