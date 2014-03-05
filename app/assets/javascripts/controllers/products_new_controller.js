App.ProductsNewController = Ember.ObjectController.extend({
  title: null,
  upload_picture: "none",
  actions: {
    create: function(){
      product = this.store.createRecord('product', {title: this.get('title')});

      if(this.get('upload_picture')){
        product.set('picture', this.get('upload_picture'));
      }

      controller = this;
      product.save().then(function(){
        controller.transitionToRoute('products');
      });
    }
  }
});
