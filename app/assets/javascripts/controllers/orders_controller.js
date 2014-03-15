App.OrdersController = Ember.ArrayController.extend({
  viewingOrderId: null,
  sortProperties: ['created_at'],
  sortAscending: false,
  isActive: (function(){
    console.log(this.get('id'));
    this.get('viewingOrderId') == this.get('id');
    return false;
  }).property('viewingOrderId')
});
