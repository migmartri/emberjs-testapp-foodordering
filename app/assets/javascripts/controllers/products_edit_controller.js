App.ProductEditController = Ember.ObjectController.extend({
  upload_picture: "none",
  actions: {
    update: function(){
      product = this.get('model')
      if(this.get('upload_picture')){
        product.set('picture', this.get('upload_picture'));
        Bootstrap.GNM.push('Updating product...', 'Please be patient.', 'info');
      }

      controller = this;
      product.save().then(function(){
        Bootstrap.GNM.push('Success!', 'The product has been updated.', 'success');

        controller.transitionToRoute('products');
      });
    }
  }
});
