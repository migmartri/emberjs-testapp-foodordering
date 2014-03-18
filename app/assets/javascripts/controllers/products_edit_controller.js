App.ProductsEditController = Ember.ObjectController.extend({
  upload_picture: "none",
  dialogButtons: [
    Ember.Object.create({title: 'Update', clicked: "update"}),
    Ember.Object.create({title: 'Cancel', dismiss: 'modal', clicked: 'cancel'})
  ],
  actions: {
    cancel: function(){
      Bootstrap.ModalManager.close('manualModal');
      this.transitionToRoute('products');
    },
    update: function(){
      product = this.get('model')
      if(this.get('upload_picture')){
        product.set('picture', this.get('upload_picture'));
        Bootstrap.GNM.push('Updating product...', 'Please be patient.', 'info');
      }

      controller = this;
      product.save().then(function(){
        Bootstrap.GNM.push('Success!', 'The product has been updated.', 'success');
        Bootstrap.ModalManager.close('manualModal');
        controller.transitionToRoute('products');
      });
    }
  }
});
