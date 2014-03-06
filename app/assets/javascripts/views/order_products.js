App.OrderProductsView = Ember.View.extend({
  templateName: 'order_products',
  didInsertElement: function() {
    Ember.run.scheduleOnce('afterRender', this, 'buildMasonry');
  },
  buildMasonry: function() {
    /* TODO fix it, remove timeout */
    container = $('#order_products');
    //container.imagesLoaded(function(){
    //  container.masonry({itemSelector: '.product_item'});
    //});
    //
    setTimeout(function(){
      container.masonry({itemSelector: '.product_item'});
    }, 500)
  }
});
