var attr = DS.attr;
App.LineItem = DS.Model.extend({
  product: DS.belongsTo('product'),
  title: attr(),
  // If we add the productId attribute the relationship does not work
  //productId: attr(),
  order: DS.belongsTo('order'),
  createdAt: attr('date'),
  qty: attr('number', {defaultValue: 1}),
  incrQty: function(){
    this.set('qty', this.get('qty') + 1);
    return this;
  }
});
