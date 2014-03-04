App.IndexController = Ember.Controller.extend({
  actions: {
    createOrder: function(){
      controller = this;
      this.store.createRecord("order").save().then(function(order){
        controller.transitionToRoute('order', order);
      });
    }
  }
});
