App.ProductsNewController = Ember.ObjectController.extend({
  title: null,
  upload_picture: "none",
  actions: {
    create: function(){
      product = this.store.createRecord('product', {title: this.get('title')});

      if(this.get('upload_picture')){
        product.set('picture', this.get('upload_picture'));
        Bootstrap.GNM.push('Creating product...', 'Please be patient.', 'info');
      }

      controller = this;
      product.save().then(function(){
        Bootstrap.GNM.push('Success!', 'The product has been created.', 'success');
        controller.transitionToRoute('products');
      }, function(){
        /* Used to show the validations */
        controller.set('model', product);
      });
    }
  }
});
