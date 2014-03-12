App.OrderProductsView = Ember.View.extend({
  templateName: 'order_products',
  didInsertElement: function(){
    this.scheduleMasonry();
  },
  scheduleMasonry: (function(){
    console.log('Changed')
    Ember.run.scheduleOnce('afterRender', this, this.applyMasonry);
  }).observes('controller.products'),
    applyMasonry: function(){
      setTimeout(function(){
        this.$('#order_products').masonry({
          itemSelector: '.product_item',
        });
      }, 1000)
    }
});
