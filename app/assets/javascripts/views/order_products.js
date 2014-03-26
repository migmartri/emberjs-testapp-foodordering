App.OrderProductsView = Ember.View.extend({
  templateName: 'order_products',
  didInsertElement: function(){
    this.scheduleMasonry();
  },
  scheduleMasonry: (function(){
    Ember.run.scheduleOnce('afterRender', this, this.applyMasonry);
  }).observes('controller.products'),
  applyMasonry: function(){
    App.masonry = $('#order_products').masonry({
       itemSelector: '.product_item',
       columnWidth: 260
    });
  }
});
