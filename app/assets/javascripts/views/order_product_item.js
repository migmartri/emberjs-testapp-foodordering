App.OrderProductItemView = Ember.View.extend({
  templateName: 'order_product_item',
  classNames: ['col-sm-4', 'product_item'],
  mouseEnter: function(){
    this.set('hovered', true);
  },
  mouseLeave: function(){
    this.set('hovered', false);
  }
});
