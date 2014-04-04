App.CurrentOrderLineItemsController = Ember.ArrayController.extend({
  sortProperties: ['createdAt'],
  sortAscending: false,
  lineItemsCount: (function(){
    var sum = 0;
    this.get('model').forEach(function(li){
      sum = sum + li.get('qty'); 
    });
    return sum;
  }).property('model.@each.qty')
});
