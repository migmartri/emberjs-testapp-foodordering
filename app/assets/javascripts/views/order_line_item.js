App.OrderLineItemView = Ember.View.extend({
  templateName: 'order_line_item',
  classNames: ['line-item', 'row'],
  tagName: 'tr',
  mouseEnter: function(){
    this.set('onHover', true);
  },
  mouseLeave: function(){
    this.set('onHover', false);
  }
});
