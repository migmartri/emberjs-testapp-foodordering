var attr = DS.attr;
App.LineItem = DS.Model.extend({
  product: DS.belongsTo('Product'),
  productId: attr(),
  order: DS.belongsTo('Order'),
  //created_at: attr(),
  qty: attr('number', {defaultValue: 1}),
  incrQty: function(){
    this.set('qty', this.get('qty') + 1);
    return this;
  }
});
