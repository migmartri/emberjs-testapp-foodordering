App.ProductEditController = Ember.ObjectController.extend({
  upload_picture: "none",
  actions: {
    update: function(){
      product = this.get('model')
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
