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
    var $item = this.$();
    $item.hide();
    Ember.run.scheduleOnce('afterRender', this, function(){
      this.$().imagesLoaded().progress( function( imgLoad, image ) {
        $item.show();
        App.masonry.masonry( 'appended', $item );
      });
    });
  }
});
