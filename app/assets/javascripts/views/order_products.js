App.OrderProductsView = Ember.View.extend({
  templateName: 'order_products',
  didInsertElement: function(){
    this.scheduleMasonry();
  },
  didInsertChildElements: (function(){
    if(this.get('childViews').everyProperty('state', 'inDOM')){
      this.scheduleMasonry();
    }
  }).observes('childViews'),
  scheduleMasonry: (function(){
    Ember.run.scheduleOnce('afterRender', this, this.applyMasonry);
  }).observes('controller.products'),
  applyMasonry: function(){
    $('#order_products').imagesLoaded(function(){
      $('#order_products').masonry({
        itemSelector: '.product_item'
      });
    });
  }
});
