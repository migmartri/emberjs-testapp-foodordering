App.OrderLineItemView = Ember.View.extend({
  templateName: 'order_line_item',
  classNames: ['line-item', 'row'],
  tagName: 'tr',
  mouseEnter: function(){
    this.set('onHover', true);
  },
  mouseLeave: function(){
    this.set('onHover', false);
  },
  qtyDidChange: function() {
    this.$('.qty span').effect('highlight', 1000);
  }.observes('context.qty')
});
