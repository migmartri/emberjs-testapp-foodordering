App.OrderProductItemView = Ember.View.extend({
  templateName: 'order_product_item',
  classNames: ['col-lg-3 col-md-4', 'col-sm-6', 'col-xs-6', 'product_item'],
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
