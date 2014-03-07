App.OrderLineItemView = Ember.View.extend({
  templateName: 'order_line_item',
  classNames: ['line-item', 'row'],
  tagName: 'tr',
  mouseEnter: function(){
    this.set('showRemove', true);
  },
  mouseLeave: function(){
    this.set('showRemove', false);
  }
});
