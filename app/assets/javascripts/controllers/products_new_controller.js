App.ProductsNewController = Ember.ObjectController.extend({
  title: null,
  actions: {
    create: function(){
      product = this.store.createRecord('product', {title: this.get('title')});

      controller = this;
      product.save().then(function(){
        controller.transitionToRoute('products');
      });
    }
  }
});
