App.OrderSuggestionView = Ember.View.extend({
  templateName: 'order_suggestion',
  classNames: ['suggestion', 'row'],
  tagName: 'tr',
  mouseEnter: function(){
    this.set('onHover', true);
  },
  mouseLeave: function(){
    this.set('onHover', false);
  },
});
