App.OrderProductItemView = Ember.View.extend({
  templateName: 'order_product_item',
  classNames: ['col-sm-4', 'product_item'],
  mouseEnter: function(){
    this.set('hovered', true);
  },
  mouseLeave: function(){
    this.set('hovered', false);
  },
  didInsertElement: function() {
    /* Do not reexecute it in every view, do it on the parent view */
    container = this.$();
    container.fadeIn();
    container.imagesLoaded(function(){
      $('#order_products').masonry({
        itemSelector: '.product_item',
      });
    });
  }
});
