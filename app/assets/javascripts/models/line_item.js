var attr = DS.attr;
App.LineItem = DS.Model.extend({
  product: DS.belongsTo('product'),
  productId: attr(),
  order: DS.belongsTo('order'),
  //created_at: attr(),
  qty: attr('number', {defaultValue: 1}),
  incrQty: function(){
    this.set('qty', this.get('qty') + 1);
    return this;
  }
});
