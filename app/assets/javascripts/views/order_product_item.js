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
    //Ember.run.scheduleOnce('afterRender', this, this.addItemsToMasonry);
    this.$().fadeIn();
  },
  addItemsToMasonry: function(){
    item = this.$();
    item.fadeIn();
    //window.masonry.masonry('addItems', item, {itemSelector: '.product_item'});
  }
});
