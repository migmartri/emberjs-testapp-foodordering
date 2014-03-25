App.OrderProductItemView = Ember.View.extend({
  templateName: 'order_product_item',
  classNames: ['product_item'],
  mouseEnter: function(){
    this.set('hovered', true);
  },
  mouseLeave: function(){
    this.set('hovered', false);
  },
  didInsertElement: function() {
    Ember.run.scheduleOnce('afterRender', this, function(){
      this.$().fadeIn();
    });
  }
});
